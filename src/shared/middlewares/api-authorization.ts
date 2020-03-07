import { Action } from "routing-controllers";
import { AccessToken } from "../../entities/access-token.entity";
import { getRepository } from "typeorm";

export namespace ApiAuthorizationCheck {
    export async function checkAuth(action: Action, roles: string[]): Promise<boolean> {
        let accessToken: string | null | undefined;
        let accessTokenData: AccessToken | undefined;

        try {
            accessToken = action.request.get('accessToken');
            if (!accessToken) {
                return false;
            }
        } catch (error) {
            return false;
        }

        try {
            accessTokenData = await getRepository(AccessToken).findOne({ accessToken: accessToken });
            if (accessTokenData) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            return false;
        }
    }
}