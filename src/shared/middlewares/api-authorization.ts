import { Action } from "routing-controllers";

export namespace ApiAuthorizationCheck {
    export async function checkAuth(action: Action, roles: string[]): Promise<boolean> {
        // console.log('action', action);
        console.log('roles', roles);
        return true
    }
}