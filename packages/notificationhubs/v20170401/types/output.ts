import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Description of a NotificationHub AdmCredential.
     */
    export interface AdmCredentialResponse {
        /**
         * The URL of the authorization token.
         */
        authTokenUrl?: string;
        /**
         * The client identifier.
         */
        clientId?: string;
        /**
         * The credential secret access key.
         */
        clientSecret?: string;
    }

    /**
     * Description of a NotificationHub ApnsCredential.
     */
    export interface ApnsCredentialResponse {
        /**
         * The APNS certificate. Specify if using Certificate Authentication Mode.
         */
        apnsCertificate?: string;
        /**
         * The issuer (iss) registered claim key. The value is a 10-character TeamId, obtained from your developer account. Specify if using Token Authentication Mode.
         */
        appId?: string;
        /**
         * The name of the application or BundleId. Specify if using Token Authentication Mode.
         */
        appName?: string;
        /**
         * The APNS certificate password if it exists.
         */
        certificateKey?: string;
        /**
         * The APNS endpoint of this credential. If using Certificate Authentication Mode and Sandbox specify 'gateway.sandbox.push.apple.com'. If using Certificate Authentication Mode and Production specify 'gateway.push.apple.com'. If using Token Authentication Mode and Sandbox specify 'https://api.development.push.apple.com:443/3/device'. If using Token Authentication Mode and Production specify 'https://api.push.apple.com:443/3/device'.
         */
        endpoint?: string;
        /**
         * A 10-character key identifier (kid) key, obtained from your developer account. Specify if using Token Authentication Mode.
         */
        keyId?: string;
        /**
         * The APNS certificate thumbprint. Specify if using Certificate Authentication Mode.
         */
        thumbprint?: string;
        /**
         * Provider Authentication Token, obtained through your developer account. Specify if using Token Authentication Mode.
         */
        token?: string;
    }

    /**
     * Description of a NotificationHub BaiduCredential.
     */
    export interface BaiduCredentialResponse {
        /**
         * Baidu Api Key.
         */
        baiduApiKey?: string;
        /**
         * Baidu Endpoint.
         */
        baiduEndPoint?: string;
        /**
         * Baidu Secret Key
         */
        baiduSecretKey?: string;
    }

    /**
     * Description of a NotificationHub GcmCredential.
     */
    export interface GcmCredentialResponse {
        /**
         * The FCM legacy endpoint. Default value is 'https://fcm.googleapis.com/fcm/send'
         */
        gcmEndpoint?: string;
        /**
         * The Google API key.
         */
        googleApiKey?: string;
    }

    /**
     * Description of a NotificationHub MpnsCredential.
     */
    export interface MpnsCredentialResponse {
        /**
         * The certificate key for this credential.
         */
        certificateKey?: string;
        /**
         * The MPNS certificate.
         */
        mpnsCertificate?: string;
        /**
         * The MPNS certificate Thumbprint
         */
        thumbprint?: string;
    }

    /**
     * SharedAccessAuthorizationRule properties.
     */
    export interface SharedAccessAuthorizationRulePropertiesResponse {
        /**
         * A string that describes the claim type
         */
        claimType: string;
        /**
         * A string that describes the claim value
         */
        claimValue: string;
        /**
         * The created time for this rule
         */
        createdTime: string;
        /**
         * A string that describes the authorization rule.
         */
        keyName: string;
        /**
         * The last modified time for this rule
         */
        modifiedTime: string;
        /**
         * A base64-encoded 256-bit primary key for signing and validating the SAS token.
         */
        primaryKey: string;
        /**
         * The revision number for the rule
         */
        revision: number;
        /**
         * The rights associated with the rule.
         */
        rights?: string[];
        /**
         * A base64-encoded 256-bit primary key for signing and validating the SAS token.
         */
        secondaryKey: string;
    }

    /**
     * The Sku description for a namespace
     */
    export interface SkuResponse {
        /**
         * The capacity of the resource
         */
        capacity?: number;
        /**
         * The Sku Family
         */
        family?: string;
        /**
         * Name of the notification hub sku
         */
        name: string;
        /**
         * The Sku size
         */
        size?: string;
        /**
         * The tier of particular sku
         */
        tier?: string;
    }

    /**
     * Description of a NotificationHub WnsCredential.
     */
    export interface WnsCredentialResponse {
        /**
         * The package ID for this credential.
         */
        packageSid?: string;
        /**
         * The secret key.
         */
        secretKey?: string;
        /**
         * The Windows Live endpoint.
         */
        windowsLiveEndpoint?: string;
    }
