export const welcome = {
  '/': {
    get: {
      tags: [
        'welcome',
      ],
      summary: 'Welcome to the app ToDo',
      description: 'easily manage tasks and be timely ',
      produces: [
        'application/json',
      ],
      responses: {
        200: {
          description: 'successful operation',
        },
        400: {
          description: 'Invalid status value',
        },
      },
    },
  },
};
