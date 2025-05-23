import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * MEC role.
 *
 * Uses Azure REST API version 2023-07-01. In version 2.x of the Azure Native provider, it used API version 2022-03-01.
 */
export class MECRole extends pulumi.CustomResource {
    /**
     * Get an existing MECRole resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MECRole {
        return new MECRole(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:databoxedge:MECRole';

    /**
     * Returns true if the given object is an instance of MECRole.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MECRole {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MECRole.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Activation key of the MEC.
     */
    public readonly connectionString!: pulumi.Output<types.outputs.AsymmetricEncryptedSecretResponse | undefined>;
    /**
     * Controller Endpoint.
     */
    public readonly controllerEndpoint!: pulumi.Output<string | undefined>;
    /**
     * Role type.
     * Expected value is 'MEC'.
     */
    public readonly kind!: pulumi.Output<"MEC">;
    /**
     * The object name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Unique Id of the Resource.
     */
    public readonly resourceUniqueId!: pulumi.Output<string | undefined>;
    /**
     * Role status.
     */
    public readonly roleStatus!: pulumi.Output<string>;
    /**
     * Metadata pertaining to creation and last modification of Role
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The hierarchical type of the object.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a MECRole resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MECRoleArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["connectionString"] = args ? args.connectionString : undefined;
            resourceInputs["controllerEndpoint"] = args ? args.controllerEndpoint : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["kind"] = "MEC";
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceUniqueId"] = args ? args.resourceUniqueId : undefined;
            resourceInputs["roleStatus"] = args ? args.roleStatus : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["connectionString"] = undefined /*out*/;
            resourceInputs["controllerEndpoint"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["resourceUniqueId"] = undefined /*out*/;
            resourceInputs["roleStatus"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:databoxedge/v20190301:MECRole" }, { type: "azure-native:databoxedge/v20190701:MECRole" }, { type: "azure-native:databoxedge/v20190801:MECRole" }, { type: "azure-native:databoxedge/v20200501preview:MECRole" }, { type: "azure-native:databoxedge/v20200901:MECRole" }, { type: "azure-native:databoxedge/v20200901preview:MECRole" }, { type: "azure-native:databoxedge/v20201201:MECRole" }, { type: "azure-native:databoxedge/v20210201:MECRole" }, { type: "azure-native:databoxedge/v20210201preview:MECRole" }, { type: "azure-native:databoxedge/v20210601:MECRole" }, { type: "azure-native:databoxedge/v20210601preview:MECRole" }, { type: "azure-native:databoxedge/v20220301:MECRole" }, { type: "azure-native:databoxedge/v20220401preview:MECRole" }, { type: "azure-native:databoxedge/v20221201preview:MECRole" }, { type: "azure-native:databoxedge/v20230101preview:CloudEdgeManagementRole" }, { type: "azure-native:databoxedge/v20230101preview:IoTRole" }, { type: "azure-native:databoxedge/v20230101preview:KubernetesRole" }, { type: "azure-native:databoxedge/v20230101preview:MECRole" }, { type: "azure-native:databoxedge/v20230701:CloudEdgeManagementRole" }, { type: "azure-native:databoxedge/v20230701:IoTRole" }, { type: "azure-native:databoxedge/v20230701:KubernetesRole" }, { type: "azure-native:databoxedge/v20230701:MECRole" }, { type: "azure-native:databoxedge/v20231201:CloudEdgeManagementRole" }, { type: "azure-native:databoxedge/v20231201:IoTRole" }, { type: "azure-native:databoxedge/v20231201:KubernetesRole" }, { type: "azure-native:databoxedge/v20231201:MECRole" }, { type: "azure-native:databoxedge:CloudEdgeManagementRole" }, { type: "azure-native:databoxedge:IoTRole" }, { type: "azure-native:databoxedge:KubernetesRole" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(MECRole.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a MECRole resource.
 */
export interface MECRoleArgs {
    /**
     * Activation key of the MEC.
     */
    connectionString?: pulumi.Input<types.inputs.AsymmetricEncryptedSecretArgs>;
    /**
     * Controller Endpoint.
     */
    controllerEndpoint?: pulumi.Input<string>;
    /**
     * The device name.
     */
    deviceName: pulumi.Input<string>;
    /**
     * Role type.
     * Expected value is 'MEC'.
     */
    kind: pulumi.Input<"MEC">;
    /**
     * The role name.
     */
    name?: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Unique Id of the Resource.
     */
    resourceUniqueId?: pulumi.Input<string>;
    /**
     * Role status.
     */
    roleStatus: pulumi.Input<string | types.enums.RoleStatus>;
}