'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
    async create(ctx) {
        // some logic here
        const response = await super.create(ctx);
        // some more logic
      
        return response;
      }
};
