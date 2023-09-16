import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The preview of Virtual Machine Cloud Management from the Azure supports deploying and managing VMs on your Azure Stack Edge device from Azure Portal.
 * For more information, refer to: https://docs.microsoft.com/en-us/azure/databox-online/azure-stack-edge-gpu-virtual-machine-overview
 * By using this feature, you agree to the preview legal terms. See the https://azure.microsoft.com/en-us/support/legal/preview-supplemental-terms/ for additional details.
 * Azure REST API version: 2022-03-01. Prior API version in Azure Native 1.x: 2020-12-01
 */
export class CloudEdgeManagementRole extends pulumi.CustomResource {
    /**
     * Get an existing CloudEdgeManagementRole resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CloudEdgeManagementRole {
        return new CloudEdgeManagementRole(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:databoxedge:CloudEdgeManagementRole';

    /**
     * Returns true if the given object is an instance of CloudEdgeManagementRole.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CloudEdgeManagementRole {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CloudEdgeManagementRole.__pulumiType;
    }

    /**
     * Edge Profile of the resource
     */
    public /*out*/ readonly edgeProfile!: pulumi.Output<types.outputs.databoxedge.EdgeProfileResponse>;
    /**
     * Role type.
     * Expected value is 'CloudEdgeManagement'.
     */
    public readonly kind!: pulumi.Output<"CloudEdgeManagement">;
    /**
     * Local Edge Management Status
     */
    public /*out*/ readonly localManagementStatus!: pulumi.Output<string>;
    /**
     * The object name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Role status.
     */
    public readonly roleStatus!: pulumi.Output<string>;
    /**
     * Metadata pertaining to creation and last modification of Role
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.databoxedge.SystemDataResponse>;
    /**
     * The hierarchical type of the object.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a CloudEdgeManagementRole resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CloudEdgeManagementRoleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.deviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'deviceName'");
            }
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.roleStatus === undefined) && !opts.urn) {
                throw new Error("Missing required property 'roleStatus'");
            }
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["kind"] = "CloudEdgeManagement";
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["roleStatus"] = args ? args.roleStatus : undefined;
            resourceInputs["edgeProfile"] = undefined /*out*/;
            resourceInputs["localManagementStatus"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["edgeProfile"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["localManagementStatus"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["roleStatus"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:databoxedge/v20190301:CloudEdgeManagementRole" }, { type: "azure-native:databoxedge/v20190701:CloudEdgeManagementRole" }, { type: "azure-native:databoxedge/v20190801:CloudEdgeManagementRole" }, { type: "azure-native:databoxedge/v20200501preview:CloudEdgeManagementRole" }, { type: "azure-native:databoxedge/v20200901:CloudEdgeManagementRole" }, { type: "azure-native:databoxedge/v20200901preview:CloudEdgeManagementRole" }, { type: "azure-native:databoxedge/v20201201:CloudEdgeManagementRole" }, { type: "azure-native:databoxedge/v20210201:CloudEdgeManagementRole" }, { type: "azure-native:databoxedge/v20210201preview:CloudEdgeManagementRole" }, { type: "azure-native:databoxedge/v20210601:CloudEdgeManagementRole" }, { type: "azure-native:databoxedge/v20210601preview:CloudEdgeManagementRole" }, { type: "azure-native:databoxedge/v20220301:CloudEdgeManagementRole" }, { type: "azure-native:databoxedge/v20220401preview:CloudEdgeManagementRole" }, { type: "azure-native:databoxedge/v20221201preview:CloudEdgeManagementRole" }, { type: "azure-native:databoxedge/v20230101preview:CloudEdgeManagementRole" }, { type: "azure-native:databoxedge/v20230701:CloudEdgeManagementRole" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(CloudEdgeManagementRole.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a CloudEdgeManagementRole resource.
 */
export interface CloudEdgeManagementRoleArgs {
    /**
     * The device name.
     */
    deviceName: pulumi.Input<string>;
    /**
     * Role type.
     * Expected value is 'CloudEdgeManagement'.
     */
    kind: pulumi.Input<"CloudEdgeManagement">;
    /**
     * The role name.
     */
    name?: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Role status.
     */
    roleStatus: pulumi.Input<string | types.enums.RoleStatus>;
}
