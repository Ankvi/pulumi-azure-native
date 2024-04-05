import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
declare var exports: any;
const __config = new pulumi.Config("azure-native");

/**
 * Any additional Tenant IDs which should be used for authentication.
 */
export declare const auxiliaryTenantIds: string[] | undefined;
Object.defineProperty(exports, "auxiliaryTenantIds", {
    get() {
        return __config.getObject<string[]>("auxiliaryTenantIds");
    },
    enumerable: true,
});

/**
 * The password associated with the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate
 */
export declare const clientCertificatePassword: string | undefined;
Object.defineProperty(exports, "clientCertificatePassword", {
    get() {
        return __config.get("clientCertificatePassword");
    },
    enumerable: true,
});

/**
 * The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate.
 */
export declare const clientCertificatePath: string | undefined;
Object.defineProperty(exports, "clientCertificatePath", {
    get() {
        return __config.get("clientCertificatePath");
    },
    enumerable: true,
});

/**
 * The Client ID which should be used.
 */
export declare const clientId: string | undefined;
Object.defineProperty(exports, "clientId", {
    get() {
        return __config.get("clientId");
    },
    enumerable: true,
});

/**
 * The Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret.
 */
export declare const clientSecret: string | undefined;
Object.defineProperty(exports, "clientSecret", {
    get() {
        return __config.get("clientSecret");
    },
    enumerable: true,
});

/**
 * This will disable the Pulumi Partner ID which is used if a custom `partnerId` isn't specified.
 */
export declare const disablePulumiPartnerId: boolean | undefined;
Object.defineProperty(exports, "disablePulumiPartnerId", {
    get() {
        return __config.getObject<boolean>("disablePulumiPartnerId");
    },
    enumerable: true,
});

/**
 * The Cloud Environment which should be used. Possible values are public, usgovernment, and china. Defaults to public.
 */
export declare const environment: string | undefined;
Object.defineProperty(exports, "environment", {
    get() {
        return __config.get("environment");
    },
    enumerable: true,
});

/**
 * The location to use. ResourceGroups will consult this property for a default location, if one was not supplied explicitly when defining the resource.
 */
export declare const location: string | undefined;
Object.defineProperty(exports, "location", {
    get() {
        return __config.get("location");
    },
    enumerable: true,
});

/**
 * The Hostname of the Azure Metadata Service.
 */
export declare const metadataHost: string | undefined;
Object.defineProperty(exports, "metadataHost", {
    get() {
        return __config.get("metadataHost");
    },
    enumerable: true,
});

/**
 * The path to a custom endpoint for Managed Service Identity - in most circumstances this should be detected automatically.
 */
export declare const msiEndpoint: string | undefined;
Object.defineProperty(exports, "msiEndpoint", {
    get() {
        return __config.get("msiEndpoint");
    },
    enumerable: true,
});

/**
 * Your cloud service or provider’s bearer token to exchange for an OIDC ID token.
 */
export declare const oidcRequestToken: string | undefined;
Object.defineProperty(exports, "oidcRequestToken", {
    get() {
        return __config.get("oidcRequestToken");
    },
    enumerable: true,
});

/**
 * The URL to initiate the OIDC token exchange. 
 */
export declare const oidcRequestUrl: string | undefined;
Object.defineProperty(exports, "oidcRequestUrl", {
    get() {
        return __config.get("oidcRequestUrl");
    },
    enumerable: true,
});

/**
 * The OIDC token to exchange for an Azure token.
 */
export declare const oidcToken: string | undefined;
Object.defineProperty(exports, "oidcToken", {
    get() {
        return __config.get("oidcToken");
    },
    enumerable: true,
});

/**
 * A GUID/UUID that is registered with Microsoft to facilitate partner resource usage attribution.
 */
export declare const partnerId: string | undefined;
Object.defineProperty(exports, "partnerId", {
    get() {
        return __config.get("partnerId");
    },
    enumerable: true,
});

/**
 * The Subscription ID which should be used.
 */
export declare const subscriptionId: string | undefined;
Object.defineProperty(exports, "subscriptionId", {
    get() {
        return __config.get("subscriptionId");
    },
    enumerable: true,
});

/**
 * The Tenant ID which should be used.
 */
export declare const tenantId: string | undefined;
Object.defineProperty(exports, "tenantId", {
    get() {
        return __config.get("tenantId");
    },
    enumerable: true,
});

/**
 * Allow Managed Service Identity be used for Authentication.
 */
export declare const useMsi: boolean | undefined;
Object.defineProperty(exports, "useMsi", {
    get() {
        return __config.getObject<boolean>("useMsi");
    },
    enumerable: true,
});

/**
 * Allow OpenID Connect (OIDC) to be used for Authentication.
 */
export declare const useOidc: boolean | undefined;
Object.defineProperty(exports, "useOidc", {
    get() {
        return __config.getObject<boolean>("useOidc");
    },
    enumerable: true,
});