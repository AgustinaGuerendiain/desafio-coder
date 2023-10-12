import React, { useState } from "react";
import AuthStackNavigator from "./AuthStack";
import BottomTabNavigator from "./BottonTabNavigator";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfileImageQuery } from "../services/profileApi";
import { useEffect } from "react";
import { setCameraImage } from "../features/auth/authSlice";

const MainNavigator = () => {
  const { user, localId } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetProfileImageQuery(localId);

  useEffect(() => {
    if (data) {
      dispatch(setCameraImage(data.image));
    }
  }, [data]);

  return user ? <BottomTabNavigator /> : <AuthStackNavigator />;
};

export default MainNavigator;
