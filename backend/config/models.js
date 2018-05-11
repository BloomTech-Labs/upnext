/**
 * Default model configuration
 * (sails.config.models)
 *
 * Unless you override them, the following properties will be included
 * in each of your models.
 *
 * For more info on Sails models, see:
 * http://sailsjs.org/#!/documentation/concepts/ORM
 */

module.exports.models = {
  /***************************************************************************
   *                                                                          *
   * Your app's default connection. i.e. the name of one of your app's        *
   * connections (see `config/connections.js`)                                *
   *                                                                          *
   ***************************************************************************/
  // connection: 'localDiskDb',

  /***************************************************************************
   *                                                                          *
   * How and whether Sails will attempt to automatically rebuild the          *
   * tables/collections/etc. in your schema.                                  *
   *                                                                          *
   * See http://sailsjs.org/#!/documentation/concepts/ORM/model-settings.html  *
   *                                                                          *
   ***************************************************************************/
  migrate: 'safe',
  schema: true,
  attributes: {
    createdAt: { type: 'number', autoCreatedAt: true },
    updatedAt: { type: 'number', autoUpdatedAt: true },
    id: { type: 'number', autoIncrement: true }
    //--------------------------------------------------------------------------
    //  /\   Using MongoDB?
    //  ||   Replace `id` above with this instead:
    //
    // ```
    // id: { type: 'string', columnName: '_id' },
    // ```
    //--------------------------------------------------------------------------
  },

  /******************************************************************************
   *                                                                             *
   * The set of DEKs (data encryption keys) for at-rest encryption.              *
   * i.e. when encrypting/decrypting data for attributes with `encrypt: true`.   *
   *                                                                             *
   * > The `default` DEK is used for all new encryptions, but multiple DEKs      *
   * > can be configured to allow for key rotation.  In production, be sure to   *
   * > manage these keys like you would any other sensitive credential.          *
   *                                                                             *
   * > For more info, see:                                                       *
   * > https://sailsjs.com/docs/concepts/orm/model-settings#?dataEncryptionKeys  *
   *                                                                             *
   ******************************************************************************/

  dataEncryptionKeys: {
    default: '/aFl596AgbHNfAgQno6AieGXahu2CccS3Rjj9nwP7Tg='
  },

  /***************************************************************************
   *                                                                          *
   * Whether or not implicit records for associations should be cleaned up    *
   * automatically using the built-in polyfill.  This is especially useful    *
   * during development with sails-disk.                                      *
   *                                                                          *
   * Depending on which databases you're using, you may want to disable this  *
   * polyfill in your production environment.                                 *
   *                                                                          *
   * (For production configuration, see `config/env/production.js`.)          *
   *                                                                          *
   ***************************************************************************/

  cascadeOnDestroy: true
};
