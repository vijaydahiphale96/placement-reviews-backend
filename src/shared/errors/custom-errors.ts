export const CustomErrors = {
    BAD_REQUEST: {
        code: 400,
        title: 'BAD_REQUEST',
        message: 'field is missing'
    },
    WRONG_USER_LOGIN_CREDENTIAL: {
        code: 401,
        title: 'WRONG_USER_LOGIN_CREDENTIAL',
        message: 'Invalid emailId or password'
    },
    UNABLE_TO_ADD_DATA: {
        code: 402,
        title: 'UNABLE_TO_ADD_DATA',
        message: 'Server was unable to add'
    },
    UNABLE_TO_UPDATE_DATA: {
        code: 403,
        title: 'UNABLE_TO_UPDATE_DATA',
        message: 'Server was unable to update'
    },
    UNABLE_TO_DELETE_DATA: {
        code: 404,
        title: 'UNABLE_TO_DELETE_DATA',
        message: 'Server was unable to delete'
    },




    UNABLE_TO_HANDLE_REQUEST: {
        code: 500,
        title: 'UNABLE_TO_HANDLE_REQUEST',
        message: 'Server was unable to handle request'
    }
}
