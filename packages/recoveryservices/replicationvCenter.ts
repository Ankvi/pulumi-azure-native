import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * vCenter definition.
 * Azure REST API version: 2023-04-01. Prior API version in Azure Native 1.x: 2018-07-10.
 *
 * Other available API versions: 2021-03-01, 2023-06-01.
 */
export class ReplicationvCenter extends pulumi.CustomResource {
    /**
     * Get an existing ReplicationvCenter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ReplicationvCenter {
        return new ReplicationvCenter(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:recoveryservices:ReplicationvCenter';

    /**
     * Returns true if the given object is an instance of ReplicationvCenter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ReplicationvCenter {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ReplicationvCenter.__pulumiType;
    }

    /**
     * Resource Location
     */
    public /*out*/ readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource Name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * VCenter related data.
     */
    public readonly properties!: pulumi.Output<types.outputs.VCenterPropertiesResponse>;
    /**
     * Resource Type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ReplicationvCenter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ReplicationvCenterArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.fabricName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fabricName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.resourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceName'");
            }
            resourceInputs["fabricName"] = args ? args.fabricName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["vcenterName"] = args ? args.vcenterName : undefined;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:recoveryservices/v20160810:ReplicationvCenter" }, { type: "azure-native:recoveryservices/v20180110:ReplicationvCenter" }, { type: "azure-native:recoveryservices/v20180710:ReplicationvCenter" }, { type: "azure-native:recoveryservices/v20210210:ReplicationvCenter" }, { type: "azure-native:recoveryservices/v20210301:ReplicationvCenter" }, { type: "azure-native:recoveryservices/v20210401:ReplicationvCenter" }, { type: "azure-native:recoveryservices/v20210601:ReplicationvCenter" }, { type: "azure-native:recoveryservices/v20210701:ReplicationvCenter" }, { type: "azure-native:recoveryservices/v20210801:ReplicationvCenter" }, { type: "azure-native:recoveryservices/v20211001:ReplicationvCenter" }, { type: "azure-native:recoveryservices/v20211101:ReplicationvCenter" }, { type: "azure-native:recoveryservices/v20211201:ReplicationvCenter" }, { type: "azure-native:recoveryservices/v20220101:ReplicationvCenter" }, { type: "azure-native:recoveryservices/v20220201:ReplicationvCenter" }, { type: "azure-native:recoveryservices/v20220301:ReplicationvCenter" }, { type: "azure-native:recoveryservices/v20220401:ReplicationvCenter" }, { type: "azure-native:recoveryservices/v20220501:ReplicationvCenter" }, { type: "azure-native:recoveryservices/v20220801:ReplicationvCenter" }, { type: "azure-native:recoveryservices/v20220910:ReplicationvCenter" }, { type: "azure-native:recoveryservices/v20221001:ReplicationvCenter" }, { type: "azure-native:recoveryservices/v20230101:ReplicationvCenter" }, { type: "azure-native:recoveryservices/v20230201:ReplicationvCenter" }, { type: "azure-native:recoveryservices/v20230401:ReplicationvCenter" }, { type: "azure-native:recoveryservices/v20230601:ReplicationvCenter" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ReplicationvCenter.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ReplicationvCenter resource.
 */
export interface ReplicationvCenterArgs {
    /**
     * Fabric name.
     */
    fabricName: pulumi.Input<string>;
    /**
     * The properties of an add vCenter request.
     */
    properties?: pulumi.Input<types.inputs.AddVCenterRequestPropertiesArgs>;
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the recovery services vault.
     */
    resourceName: pulumi.Input<string>;
    /**
     * vcenter name.
     */
    vcenterName?: pulumi.Input<string>;
}
