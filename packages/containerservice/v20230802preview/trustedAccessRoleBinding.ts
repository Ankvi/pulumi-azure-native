import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Defines binding between a resource and role
 */
export class TrustedAccessRoleBinding extends pulumi.CustomResource {
    /**
     * Get an existing TrustedAccessRoleBinding resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): TrustedAccessRoleBinding {
        return new TrustedAccessRoleBinding(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:containerservice/v20230802preview:TrustedAccessRoleBinding';

    /**
     * Returns true if the given object is an instance of TrustedAccessRoleBinding.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TrustedAccessRoleBinding {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TrustedAccessRoleBinding.__pulumiType;
    }

    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The current provisioning state of trusted access role binding.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * A list of roles to bind, each item is a resource type qualified role name. For example: 'Microsoft.MachineLearningServices/workspaces/reader'.
     */
    public readonly roles!: pulumi.Output<string[]>;
    /**
     * The ARM resource ID of source resource that trusted access is configured for.
     */
    public readonly sourceResourceId!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a TrustedAccessRoleBinding resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TrustedAccessRoleBindingArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.resourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceName'");
            }
            if ((!args || args.roles === undefined) && !opts.urn) {
                throw new Error("Missing required property 'roles'");
            }
            if ((!args || args.sourceResourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceResourceId'");
            }
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["roles"] = args ? args.roles : undefined;
            resourceInputs["sourceResourceId"] = args ? args.sourceResourceId : undefined;
            resourceInputs["trustedAccessRoleBindingName"] = args ? args.trustedAccessRoleBindingName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["roles"] = undefined /*out*/;
            resourceInputs["sourceResourceId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:containerservice:TrustedAccessRoleBinding" }, { type: "azure-native:containerservice/v20220402preview:TrustedAccessRoleBinding" }, { type: "azure-native:containerservice/v20220502preview:TrustedAccessRoleBinding" }, { type: "azure-native:containerservice/v20220602preview:TrustedAccessRoleBinding" }, { type: "azure-native:containerservice/v20220702preview:TrustedAccessRoleBinding" }, { type: "azure-native:containerservice/v20220802preview:TrustedAccessRoleBinding" }, { type: "azure-native:containerservice/v20220803preview:TrustedAccessRoleBinding" }, { type: "azure-native:containerservice/v20220902preview:TrustedAccessRoleBinding" }, { type: "azure-native:containerservice/v20221002preview:TrustedAccessRoleBinding" }, { type: "azure-native:containerservice/v20221102preview:TrustedAccessRoleBinding" }, { type: "azure-native:containerservice/v20230102preview:TrustedAccessRoleBinding" }, { type: "azure-native:containerservice/v20230202preview:TrustedAccessRoleBinding" }, { type: "azure-native:containerservice/v20230302preview:TrustedAccessRoleBinding" }, { type: "azure-native:containerservice/v20230402preview:TrustedAccessRoleBinding" }, { type: "azure-native:containerservice/v20230502preview:TrustedAccessRoleBinding" }, { type: "azure-native:containerservice/v20230602preview:TrustedAccessRoleBinding" }, { type: "azure-native:containerservice/v20230702preview:TrustedAccessRoleBinding" }, { type: "azure-native:containerservice/v20230901:TrustedAccessRoleBinding" }, { type: "azure-native:containerservice/v20230902preview:TrustedAccessRoleBinding" }, { type: "azure-native:containerservice/v20231001:TrustedAccessRoleBinding" }, { type: "azure-native:containerservice/v20231002preview:TrustedAccessRoleBinding" }, { type: "azure-native:containerservice/v20231101:TrustedAccessRoleBinding" }, { type: "azure-native:containerservice/v20231102preview:TrustedAccessRoleBinding" }, { type: "azure-native:containerservice/v20240101:TrustedAccessRoleBinding" }, { type: "azure-native:containerservice/v20240102preview:TrustedAccessRoleBinding" }, { type: "azure-native:containerservice/v20240201:TrustedAccessRoleBinding" }, { type: "azure-native:containerservice/v20240202preview:TrustedAccessRoleBinding" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(TrustedAccessRoleBinding.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a TrustedAccessRoleBinding resource.
 */
export interface TrustedAccessRoleBindingArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the managed cluster resource.
     */
    resourceName: pulumi.Input<string>;
    /**
     * A list of roles to bind, each item is a resource type qualified role name. For example: 'Microsoft.MachineLearningServices/workspaces/reader'.
     */
    roles: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ARM resource ID of source resource that trusted access is configured for.
     */
    sourceResourceId: pulumi.Input<string>;
    /**
     * The name of trusted access role binding.
     */
    trustedAccessRoleBindingName?: pulumi.Input<string>;
}