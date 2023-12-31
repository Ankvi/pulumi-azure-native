import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Description of a NotificationHub AdmCredential.
     */
    export interface AdmCredentialArgs {
        /**
         * The URL of the authorization token.
         */
        authTokenUrl?: pulumi.Input<string>;
        /**
         * The client identifier.
         */
        clientId?: pulumi.Input<string>;
        /**
         * The credential secret access key.
         */
        clientSecret?: pulumi.Input<string>;
    }

    /**
     * Description of a NotificationHub ApnsCredential.
     */
    export interface ApnsCredentialArgs {
        /**
         * The APNS certificate. Specify if using Certificate Authentication Mode.
         */
        apnsCertificate?: pulumi.Input<string>;
        /**
         * The issuer (iss) registered claim key. The value is a 10-character TeamId, obtained from your developer account. Specify if using Token Authentication Mode.
         */
        appId?: pulumi.Input<string>;
        /**
         * The name of the application or BundleId. Specify if using Token Authentication Mode.
         */
        appName?: pulumi.Input<string>;
        /**
         * The APNS certificate password if it exists.
         */
        certificateKey?: pulumi.Input<string>;
        /**
         * The APNS endpoint of this credential. If using Certificate Authentication Mode and Sandbox specify 'gateway.sandbox.push.apple.com'. If using Certificate Authentication Mode and Production specify 'gateway.push.apple.com'. If using Token Authentication Mode and Sandbox specify 'https://api.development.push.apple.com:443/3/device'. If using Token Authentication Mode and Production specify 'https://api.push.apple.com:443/3/device'.
         */
        endpoint?: pulumi.Input<string>;
        /**
         * A 10-character key identifier (kid) key, obtained from your developer account. Specify if using Token Authentication Mode.
         */
        keyId?: pulumi.Input<string>;
        /**
         * The APNS certificate thumbprint. Specify if using Certificate Authentication Mode.
         */
        thumbprint?: pulumi.Input<string>;
        /**
         * Provider Authentication Token, obtained through your developer account. Specify if using Token Authentication Mode.
         */
        token?: pulumi.Input<string>;
    }

    /**
     * Description of a NotificationHub BaiduCredential.
     */
    export interface BaiduCredentialArgs {
        /**
         * Baidu Api Key.
         */
        baiduApiKey?: pulumi.Input<string>;
        /**
         * Baidu Endpoint.
         */
        baiduEndPoint?: pulumi.Input<string>;
        /**
         * Baidu Secret Key
         */
        baiduSecretKey?: pulumi.Input<string>;
    }

    /**
     * Description of a NotificationHub GcmCredential.
     */
    export interface GcmCredentialArgs {
        /**
         * The FCM legacy endpoint. Default value is 'https://fcm.googleapis.com/fcm/send'
         */
        gcmEndpoint?: pulumi.Input<string>;
        /**
         * The Google API key.
         */
        googleApiKey?: pulumi.Input<string>;
    }

    /**
     * Description of a NotificationHub MpnsCredential.
     */
    export interface MpnsCredentialArgs {
        /**
         * The certificate key for this credential.
         */
        certificateKey?: pulumi.Input<string>;
        /**
         * The MPNS certificate.
         */
        mpnsCertificate?: pulumi.Input<string>;
        /**
         * The MPNS certificate Thumbprint
         */
        thumbprint?: pulumi.Input<string>;
    }

    /**
     * SharedAccessAuthorizationRule properties.
     */
    export interface SharedAccessAuthorizationRulePropertiesArgs {
        /**
         * The rights associated with the rule.
         */
        rights?: pulumi.Input<pulumi.Input<enums.AccessRights>[]>;
    }

    /**
     * The Sku description for a namespace
     */
    export interface SkuArgs {
        /**
         * The capacity of the resource
         */
        capacity?: pulumi.Input<number>;
        /**
         * The Sku Family
         */
        family?: pulumi.Input<string>;
        /**
         * Name of the notification hub sku
         */
        name: pulumi.Input<string | enums.SkuName>;
        /**
         * The Sku size
         */
        size?: pulumi.Input<string>;
        /**
         * The tier of particular sku
         */
        tier?: pulumi.Input<string>;
    }

    /**
     * Description of a NotificationHub WnsCredential.
     */
    export interface WnsCredentialArgs {
        /**
         * The package ID for this credential.
         */
        packageSid?: pulumi.Input<string>;
        /**
         * The secret key.
         */
        secretKey?: pulumi.Input<string>;
        /**
         * The Windows Live endpoint.
         */
        windowsLiveEndpoint?: pulumi.Input<string>;
    }
