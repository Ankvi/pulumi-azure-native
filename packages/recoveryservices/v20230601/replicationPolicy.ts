import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Protection profile details.
 */
export class ReplicationPolicy extends pulumi.CustomResource {
    /**
     * Get an existing ReplicationPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ReplicationPolicy {
        return new ReplicationPolicy(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:recoveryservices/v20230601:ReplicationPolicy';

    /**
     * Returns true if the given object is an instance of ReplicationPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ReplicationPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ReplicationPolicy.__pulumiType;
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
     * The custom data.
     */
    public readonly properties!: pulumi.Output<types.outputs.PolicyPropertiesResponse>;
    /**
     * Resource Type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ReplicationPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ReplicationPolicyArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.resourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceName'");
            }
            resourceInputs["policyName"] = args ? args.policyName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
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
        const aliasOpts = { aliases: [{ type: "azure-native:recoveryservices:ReplicationPolicy" }, { type: "azure-native:recoveryservices/v20160810:ReplicationPolicy" }, { type: "azure-native:recoveryservices/v20180110:ReplicationPolicy" }, { type: "azure-native:recoveryservices/v20180710:ReplicationPolicy" }, { type: "azure-native:recoveryservices/v20210210:ReplicationPolicy" }, { type: "azure-native:recoveryservices/v20210301:ReplicationPolicy" }, { type: "azure-native:recoveryservices/v20210401:ReplicationPolicy" }, { type: "azure-native:recoveryservices/v20210601:ReplicationPolicy" }, { type: "azure-native:recoveryservices/v20210701:ReplicationPolicy" }, { type: "azure-native:recoveryservices/v20210801:ReplicationPolicy" }, { type: "azure-native:recoveryservices/v20211001:ReplicationPolicy" }, { type: "azure-native:recoveryservices/v20211101:ReplicationPolicy" }, { type: "azure-native:recoveryservices/v20211201:ReplicationPolicy" }, { type: "azure-native:recoveryservices/v20220101:ReplicationPolicy" }, { type: "azure-native:recoveryservices/v20220201:ReplicationPolicy" }, { type: "azure-native:recoveryservices/v20220301:ReplicationPolicy" }, { type: "azure-native:recoveryservices/v20220401:ReplicationPolicy" }, { type: "azure-native:recoveryservices/v20220501:ReplicationPolicy" }, { type: "azure-native:recoveryservices/v20220801:ReplicationPolicy" }, { type: "azure-native:recoveryservices/v20220910:ReplicationPolicy" }, { type: "azure-native:recoveryservices/v20221001:ReplicationPolicy" }, { type: "azure-native:recoveryservices/v20230101:ReplicationPolicy" }, { type: "azure-native:recoveryservices/v20230201:ReplicationPolicy" }, { type: "azure-native:recoveryservices/v20230401:ReplicationPolicy" }, { type: "azure-native:recoveryservices/v20230801:ReplicationPolicy" }, { type: "azure-native:recoveryservices/v20240101:ReplicationPolicy" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ReplicationPolicy.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ReplicationPolicy resource.
 */
export interface ReplicationPolicyArgs {
    /**
     * Replication policy name.
     */
    policyName?: pulumi.Input<string>;
    /**
     * Policy creation properties.
     */
    properties?: pulumi.Input<types.inputs.CreatePolicyInputPropertiesArgs>;
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the recovery services vault.
     */
    resourceName: pulumi.Input<string>;
}