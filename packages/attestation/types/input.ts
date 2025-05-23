import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Client supplied parameters used to create a new attestation provider.
 */
export interface AttestationServiceCreationSpecificParamsArgs {
    /**
     * JSON Web Key Set defining a set of X.509 Certificates that will represent the parent certificate for the signing certificate used for policy operations
     */
    policySigningCertificates?: pulumi.Input<JSONWebKeySetArgs>;
    /**
     * Controls whether traffic from the public network is allowed to access the Attestation Provider APIs.
     */
    publicNetworkAccess?: pulumi.Input<string | enums.PublicNetworkAccessType>;
    /**
     * The setting that controls whether authentication is enabled or disabled for TPM Attestation REST APIs.
     */
    tpmAttestationAuthentication?: pulumi.Input<string | enums.TpmAttestationAuthenticationType>;
}

export interface JSONWebKeyArgs {
    /**
     * The "alg" (algorithm) parameter identifies the algorithm intended for
     * use with the key.  The values used should either be registered in the
     * IANA "JSON Web Signature and Encryption Algorithms" registry
     * established by [JWA] or be a value that contains a Collision-
     * Resistant Name.
     */
    alg?: pulumi.Input<string>;
    /**
     * The "crv" (curve) parameter identifies the curve type
     */
    crv?: pulumi.Input<string>;
    /**
     * RSA private exponent or ECC private key
     */
    d?: pulumi.Input<string>;
    /**
     * RSA Private Key Parameter
     */
    dp?: pulumi.Input<string>;
    /**
     * RSA Private Key Parameter
     */
    dq?: pulumi.Input<string>;
    /**
     * RSA public exponent, in Base64
     */
    e?: pulumi.Input<string>;
    /**
     * Symmetric key
     */
    k?: pulumi.Input<string>;
    /**
     * The "kid" (key ID) parameter is used to match a specific key.  This
     * is used, for instance, to choose among a set of keys within a JWK Set
     * during key rollover.  The structure of the "kid" value is
     * unspecified.  When "kid" values are used within a JWK Set, different
     * keys within the JWK Set SHOULD use distinct "kid" values.  (One
     * example in which different keys might use the same "kid" value is if
     * they have different "kty" (key type) values but are considered to be
     * equivalent alternatives by the application using them.)  The "kid"
     * value is a case-sensitive string.
     */
    kid?: pulumi.Input<string>;
    /**
     * The "kty" (key type) parameter identifies the cryptographic algorithm
     * family used with the key, such as "RSA" or "EC". "kty" values should
     * either be registered in the IANA "JSON Web Key Types" registry
     * established by [JWA] or be a value that contains a Collision-
     * Resistant Name.  The "kty" value is a case-sensitive string.
     */
    kty: pulumi.Input<string>;
    /**
     * RSA modulus, in Base64
     */
    n?: pulumi.Input<string>;
    /**
     * RSA secret prime
     */
    p?: pulumi.Input<string>;
    /**
     * RSA secret prime, with p < q
     */
    q?: pulumi.Input<string>;
    /**
     * RSA Private Key Parameter
     */
    qi?: pulumi.Input<string>;
    /**
     * Use ("public key use") identifies the intended use of
     * the public key. The "use" parameter is employed to indicate whether
     * a public key is used for encrypting data or verifying the signature
     * on data. Values are commonly "sig" (signature) or "enc" (encryption).
     */
    use?: pulumi.Input<string>;
    /**
     * X coordinate for the Elliptic Curve point
     */
    x?: pulumi.Input<string>;
    /**
     * The "x5c" (X.509 certificate chain) parameter contains a chain of one
     * or more PKIX certificates [RFC5280].  The certificate chain is
     * represented as a JSON array of certificate value strings.  Each
     * string in the array is a base64-encoded (Section 4 of [RFC4648] --
     * not base64url-encoded) DER [ITU.X690.1994] PKIX certificate value.
     * The PKIX certificate containing the key value MUST be the first
     * certificate.
     */
    x5c?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Y coordinate for the Elliptic Curve point
     */
    y?: pulumi.Input<string>;
}

export interface JSONWebKeySetArgs {
    /**
     * The value of the "keys" parameter is an array of JWK values.  By
     * default, the order of the JWK values within the array does not imply
     * an order of preference among them, although applications of JWK Sets
     * can choose to assign a meaning to the order for their purposes, if
     * desired.
     */
    keys?: pulumi.Input<pulumi.Input<JSONWebKeyArgs>[]>;
}

/**
 * A collection of information about the state of the connection between service consumer and provider.
 */
export interface PrivateLinkServiceConnectionStateArgs {
    /**
     * A message indicating if changes on the service provider require any updates on the consumer.
     */
    actionsRequired?: pulumi.Input<string>;
    /**
     * The reason for approval/rejection of the connection.
     */
    description?: pulumi.Input<string>;
    /**
     * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
     */
    status?: pulumi.Input<string | enums.PrivateEndpointServiceConnectionStatus>;
}
