import React, { useState } from "react";
import AuthStackNavigator from "./AuthStack";
import BottomTabNavigator from "./BottonTabNavigator";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfileImageQuery } from "../services/profileApi";
import { useEffect } from "react";
import { setCameraImage, setUser } from "../features/auth/authSlice";
import { fetchSession, fetchUser } from "../db";

const MainNavigator = () => {
  const { user, localId } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetProfileImageQuery(localId);

  useEffect(() => {
    if (data) {
      dispatch(setCameraImage(data.image));
    }
  }, [data]);

  useEffect(() => {
    (async () => {
      try {
        const session = await fetchSession();
        console.log("Esta es la sesion", session);
        if (session.rows.length) {
          const user = session.rows._array[0];
          const userData = await fetchUser(user.localId);
          if (userData.length) {
            const userInfo = userData[0];
            console.log("Información adicional del usuario :", userInfo);

            const combinedUserData = {
              ...user,
              ...userInfo,
            };
            dispatch(setUser(combinedUserData));
          }
        }
      } catch (error) {
        console.log("Error en obtener usuario", error.message);
      }
    })();
  }, [localId]);

  return user ? <BottomTabNavigator /> : <AuthStackNavigator />;
};

export default MainNavigator;
