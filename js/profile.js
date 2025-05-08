import { editBox } from './functions/editBox.js';
import { logout } from './functions/logout.js';
import { editProfile } from './functions/editProfile.js';
import { getHeaderInfo } from './functions/getHeaderInfo.js';
import { renderProfile } from './functions/renderProfile.js';

getHeaderInfo();
renderProfile();
editBox();
editProfile();
logout();
