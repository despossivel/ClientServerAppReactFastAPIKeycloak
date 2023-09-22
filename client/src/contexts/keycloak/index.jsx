import Keycloak from 'keycloak-js';
 
export const keycloak = new Keycloak({
    url: 'http://192.168.0.106:8080/',
    realm: 'master',
    clientId: 'front',
});

export const initOptions = {
    onload: 'check-sso',
    checkLoginIframe: false,
}
