import forge from 'node-forge';
import appsettings from '../../appsettings.json';

export const encryptPassword = (password: string | undefined) => {
  if (!password) {
    return '';
  }
  
  const publickeyObj = forge.pki.publicKeyFromPem(appsettings.PUBLIC_KEY);
  return forge.util.encode64(publickeyObj.encrypt(password, 'RSA-OAEP'));
};
