export const ValidateFormData = (string: string | null) => {
  if (string && string.trim().length > 0) {
    return true;
  } else {
    return false;
  }
};
