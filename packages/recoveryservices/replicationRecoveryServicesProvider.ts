import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Provider details.
 * Azure REST API version: 2023-04-01. Prior API version in Azure Native 1.x: 2018-07-10.
 *
 * Other available API versions: 2023-06-01, 2023-08-01, 2024-01-01, 2024-02-01.
 */
export class ReplicationRecoveryServicesProvider extends pulumi.CustomResource {
    /**
     * Get an existing ReplicationRecoveryServicesProvider resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ReplicationRecoveryServicesProvider {
        return new ReplicationRecoveryServicesProvider(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:recoveryservices:ReplicationRecoveryServicesProvider';

    /**
     * Returns true if the given object is an instance of ReplicationRecoveryServicesProvider.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ReplicationRecoveryServicesProvider {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ReplicationRecoveryServicesProvider.__pulumiType;
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
     * Provider properties.
     */
    public readonly properties!: pulumi.Output<types.outputs.RecoveryServicesProviderPropertiesResponse>;
    /**
     * Resource Type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ReplicationRecoveryServicesProvider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ReplicationRecoveryServicesProviderArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.fabricName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fabricName'");
            }
            if ((!args || args.properties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'properties'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.resourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceName'");
            }
            resourceInputs["fabricName"] = args ? args.fabricName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["providerName"] = args ? args.providerName : undefined;
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
        const aliasOpts = { aliases: [{ type: "azure-native:recoveryservices/v20180110:ReplicationRecoveryServicesProvider" }, { type: "azure-native:recoveryservices/v20180710:ReplicationRecoveryServicesProvider" }, { type: "azure-native:recoveryservices/v20210210:ReplicationRecoveryServicesProvider" }, { type: "azure-native:recoveryservices/v20210301:ReplicationRecoveryServicesProvider" }, { type: "azure-native:recoveryservices/v20210401:ReplicationRecoveryServicesProvider" }, { type: "azure-native:recoveryservices/v20210601:ReplicationRecoveryServicesProvider" }, { type: "azure-native:recoveryservices/v20210701:ReplicationRecoveryServicesProvider" }, { type: "azure-native:recoveryservices/v20210801:ReplicationRecoveryServicesProvider" }, { type: "azure-native:recoveryservices/v20211001:ReplicationRecoveryServicesProvider" }, { type: "azure-native:recoveryservices/v20211101:ReplicationRecoveryServicesProvider" }, { type: "azure-native:recoveryservices/v20211201:ReplicationRecoveryServicesProvider" }, { type: "azure-native:recoveryservices/v20220101:ReplicationRecoveryServicesProvider" }, { type: "azure-native:recoveryservices/v20220201:ReplicationRecoveryServicesProvider" }, { type: "azure-native:recoveryservices/v20220301:ReplicationRecoveryServicesProvider" }, { type: "azure-native:recoveryservices/v20220401:ReplicationRecoveryServicesProvider" }, { type: "azure-native:recoveryservices/v20220501:ReplicationRecoveryServicesProvider" }, { type: "azure-native:recoveryservices/v20220801:ReplicationRecoveryServicesProvider" }, { type: "azure-native:recoveryservices/v20220910:ReplicationRecoveryServicesProvider" }, { type: "azure-native:recoveryservices/v20221001:ReplicationRecoveryServicesProvider" }, { type: "azure-native:recoveryservices/v20230101:ReplicationRecoveryServicesProvider" }, { type: "azure-native:recoveryservices/v20230201:ReplicationRecoveryServicesProvider" }, { type: "azure-native:recoveryservices/v20230401:ReplicationRecoveryServicesProvider" }, { type: "azure-native:recoveryservices/v20230601:ReplicationRecoveryServicesProvider" }, { type: "azure-native:recoveryservices/v20230801:ReplicationRecoveryServicesProvider" }, { type: "azure-native:recoveryservices/v20240101:ReplicationRecoveryServicesProvider" }, { type: "azure-native:recoveryservices/v20240201:ReplicationRecoveryServicesProvider" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ReplicationRecoveryServicesProvider.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ReplicationRecoveryServicesProvider resource.
 */
export interface ReplicationRecoveryServicesProviderArgs {
    /**
     * Fabric name.
     */
    fabricName: pulumi.Input<string>;
    /**
     * The properties of an add provider request.
     */
    properties: pulumi.Input<types.inputs.AddRecoveryServicesProviderInputPropertiesArgs>;
    /**
     * Recovery services provider name.
     */
    providerName?: pulumi.Input<string>;
    /**
     * The name of the resource group where the recovery services vault is present.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the recovery services vault.
     */
    resourceName: pulumi.Input<string>;
}