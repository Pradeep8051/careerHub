import React from 'react';

export function UserToken() {
  const userToken = sessionStorage.getItem("loginToken");
  return userToken;
}

export function UserRole() {
  const userRole = sessionStorage.getItem("userRole");
  return userRole;
}