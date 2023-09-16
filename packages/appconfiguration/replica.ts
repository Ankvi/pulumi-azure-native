import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The replica resource.
 * Azure REST API version: 2023-03-01.
 */
export class Replica extends pulumi.CustomResource {
    /**
     * Get an existing Replica resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Replica {
        return new Replica(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:appconfiguration:Replica';

    /**
     * Returns true if the given object is an instance of Replica.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Replica {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Replica.__pulumiType;
    }

    /**
     * The URI of the replica where the replica API will be available.
     */
    public /*out*/ readonly endpoint!: pulumi.Output<string>;
    /**
     * The location of the replica.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the replica.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the replica.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Resource system metadata.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.appconfiguration.SystemDataResponse>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Replica resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ReplicaArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.configStoreName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'configStoreName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["configStoreName"] = args ? args.configStoreName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["replicaName"] = args ? args.replicaName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["endpoint"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["endpoint"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:appconfiguration/v20220301preview:Replica" }, { type: "azure-native:appconfiguration/v20230301:Replica" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Replica.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Replica resource.
 */
export interface ReplicaArgs {
    /**
     * The name of the configuration store.
     */
    configStoreName: pulumi.Input<string>;
    /**
     * The location of the replica.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the replica.
     */
    replicaName?: pulumi.Input<string>;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}
