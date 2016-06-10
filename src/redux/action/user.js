/**
 * Actions relating to our user data
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2016-06-08
 */

export const getUser = userId => (
  {
    type: 'GET_USER',
    toServer: {
      transport: 'socket',
      data: {
        userId,
      },
      event: 'user.getbyid',
    },
  }
);
