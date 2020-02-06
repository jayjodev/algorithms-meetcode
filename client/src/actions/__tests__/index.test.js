import { signout } from '../index';
import { AUTH_USER } from '../types';

/**
 *  Action without APIs call
 */

describe('siginout', () => {
    it('has the correct type', () => {
        const action = signout();
        expect(action.type).toEqual(AUTH_USER);
    });
    it('default auth', () => {
        const action = signout();
        expect(action.payload).toEqual('');
    });
});

