import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ListSecurityAdvisoryImpactedResourceBySubscriptionIdAndEventIdArgs, ListSecurityAdvisoryImpactedResourceBySubscriptionIdAndEventIdResult, ListSecurityAdvisoryImpactedResourceBySubscriptionIdAndEventIdOutputArgs } from "./listSecurityAdvisoryImpactedResourceBySubscriptionIdAndEventId";
export const listSecurityAdvisoryImpactedResourceBySubscriptionIdAndEventId: typeof import("./listSecurityAdvisoryImpactedResourceBySubscriptionIdAndEventId").listSecurityAdvisoryImpactedResourceBySubscriptionIdAndEventId = null as any;
export const listSecurityAdvisoryImpactedResourceBySubscriptionIdAndEventIdOutput: typeof import("./listSecurityAdvisoryImpactedResourceBySubscriptionIdAndEventId").listSecurityAdvisoryImpactedResourceBySubscriptionIdAndEventIdOutput = null as any;
utilities.lazyLoad(exports, ["listSecurityAdvisoryImpactedResourceBySubscriptionIdAndEventId","listSecurityAdvisoryImpactedResourceBySubscriptionIdAndEventIdOutput"], () => require("./listSecurityAdvisoryImpactedResourceBySubscriptionIdAndEventId"));

export { ListSecurityAdvisoryImpactedResourceByTenantIdAndEventIdArgs, ListSecurityAdvisoryImpactedResourceByTenantIdAndEventIdResult, ListSecurityAdvisoryImpactedResourceByTenantIdAndEventIdOutputArgs } from "./listSecurityAdvisoryImpactedResourceByTenantIdAndEventId";
export const listSecurityAdvisoryImpactedResourceByTenantIdAndEventId: typeof import("./listSecurityAdvisoryImpactedResourceByTenantIdAndEventId").listSecurityAdvisoryImpactedResourceByTenantIdAndEventId = null as any;
export const listSecurityAdvisoryImpactedResourceByTenantIdAndEventIdOutput: typeof import("./listSecurityAdvisoryImpactedResourceByTenantIdAndEventId").listSecurityAdvisoryImpactedResourceByTenantIdAndEventIdOutput = null as any;
utilities.lazyLoad(exports, ["listSecurityAdvisoryImpactedResourceByTenantIdAndEventId","listSecurityAdvisoryImpactedResourceByTenantIdAndEventIdOutput"], () => require("./listSecurityAdvisoryImpactedResourceByTenantIdAndEventId"));


// Export sub-modules:
import * as v20221001 from "./v20221001";
import * as v20221001preview from "./v20221001preview";
import * as v20230701preview from "./v20230701preview";
import * as v20231001preview from "./v20231001preview";

export {
    v20221001,
    v20221001preview,
    v20230701preview,
    v20231001preview,
};
