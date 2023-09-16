import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Sentinel onboarding state
 * Azure REST API version: 2023-02-01. Prior API version in Azure Native 1.x: 2021-03-01-preview
 */
export class SentinelOnboardingState extends pulumi.CustomResource {
    /**
     * Get an existing SentinelOnboardingState resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SentinelOnboardingState {
        return new SentinelOnboardingState(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:securityinsights:SentinelOnboardingState';

    /**
     * Returns true if the given object is an instance of SentinelOnboardingState.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SentinelOnboardingState {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SentinelOnboardingState.__pulumiType;
    }

    /**
     * Flag that indicates the status of the CMK setting
     */
    public readonly customerManagedKey!: pulumi.Output<boolean | undefined>;
    /**
     * Etag of the azure resource
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.securityinsights.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SentinelOnboardingState resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SentinelOnboardingStateArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["customerManagedKey"] = args ? args.customerManagedKey : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sentinelOnboardingStateName"] = args ? args.sentinelOnboardingStateName : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["customerManagedKey"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:securityinsights/v20210301preview:SentinelOnboardingState" }, { type: "azure-native:securityinsights/v20210901preview:SentinelOnboardingState" }, { type: "azure-native:securityinsights/v20211001:SentinelOnboardingState" }, { type: "azure-native:securityinsights/v20211001preview:SentinelOnboardingState" }, { type: "azure-native:securityinsights/v20220101preview:SentinelOnboardingState" }, { type: "azure-native:securityinsights/v20220401preview:SentinelOnboardingState" }, { type: "azure-native:securityinsights/v20220501preview:SentinelOnboardingState" }, { type: "azure-native:securityinsights/v20220601preview:SentinelOnboardingState" }, { type: "azure-native:securityinsights/v20220701preview:SentinelOnboardingState" }, { type: "azure-native:securityinsights/v20220801:SentinelOnboardingState" }, { type: "azure-native:securityinsights/v20220801preview:SentinelOnboardingState" }, { type: "azure-native:securityinsights/v20220901preview:SentinelOnboardingState" }, { type: "azure-native:securityinsights/v20221001preview:SentinelOnboardingState" }, { type: "azure-native:securityinsights/v20221101:SentinelOnboardingState" }, { type: "azure-native:securityinsights/v20221101preview:SentinelOnboardingState" }, { type: "azure-native:securityinsights/v20221201preview:SentinelOnboardingState" }, { type: "azure-native:securityinsights/v20230201:SentinelOnboardingState" }, { type: "azure-native:securityinsights/v20230201preview:SentinelOnboardingState" }, { type: "azure-native:securityinsights/v20230301preview:SentinelOnboardingState" }, { type: "azure-native:securityinsights/v20230401preview:SentinelOnboardingState" }, { type: "azure-native:securityinsights/v20230501preview:SentinelOnboardingState" }, { type: "azure-native:securityinsights/v20230601preview:SentinelOnboardingState" }, { type: "azure-native:securityinsights/v20230701preview:SentinelOnboardingState" }, { type: "azure-native:securityinsights/v20230801preview:SentinelOnboardingState" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SentinelOnboardingState.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SentinelOnboardingState resource.
 */
export interface SentinelOnboardingStateArgs {
    /**
     * Flag that indicates the status of the CMK setting
     */
    customerManagedKey?: pulumi.Input<boolean>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Sentinel onboarding state name. Supports - default
     */
    sentinelOnboardingStateName?: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
