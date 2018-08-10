import { Permissions } from 'expo';

export const requestPermission = async permissionName => {
  try {
    const { status } = await Permissions.getAsync(permissionName);
    if (status === 'granted') {
      return true;
    }
    let permission = await Permissions.askAsync(permissionName);
    return permission.status === 'granted';
  } catch (error) {
    return false;
  }
};
