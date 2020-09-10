import {createHashHistory} from 'history';
import {BASE_LINE} from "./ConstsHelper";

export const HISTORY = createHashHistory({
    basename: BASE_LINE
});

export const navigate = url => {
    HISTORY.push(url);
};
export const navigateReplace = url => {
    window.location.replace(`#${url}`);
};
