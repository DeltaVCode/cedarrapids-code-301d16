//jwt - json web token JOT
const jwt = require('jsonwebtoken');


//jwks - json web key set   ~ Ja-wicks
const jwksClient = require('jwks-rsa');


//npm install jsonwebtoken jwks-rsa         // npm docs

//the jsks uri comes from auth 0 account page ADVANCED SETTINGS -> Endpoints -> oauth.
//json web key set.
const client = jwksClient({
  jwksUri: process.env.JWKS_URI
});


//we need a get key function to make this key readable.
//from the json webtoken docs
// from the jsonwebtoke docs: https://www.npmjs.com/package/jsonwebtoken
function getKey(header, callback){
  client.getSigningKey(header.kid, function(err, key) {
    // eslint-disable-next-line no-var
    var signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
}
//verify the user on our route has the right to make the request
function verifyUser(req, errorFirstOrUseTheUserCallBackFunction){
  try {
    const token = req.headers.authorization.split(' ')[1];
    console.log('tokin  ',token);
    //from the json web token docs
    jwt.verify(token, getKey, {}, errorFirstOrUseTheUserCallBackFunction);
  } catch (error) {
    errorFirstOrUseTheUserCallBackFunction('not authorized');
  }
}


module.exports = verifyUser;
