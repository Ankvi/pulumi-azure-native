import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * WordPress instance resource
 */
export class WordpressInstance extends pulumi.CustomResource {
    /**
     * Get an existing WordpressInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WordpressInstance {
        return new WordpressInstance(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:workloads/v20211201preview:WordpressInstance';

    /**
     * Returns true if the given object is an instance of WordpressInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WordpressInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WordpressInstance.__pulumiType;
    }

    /**
     * Database name used by the application
     */
    public readonly databaseName!: pulumi.Output<string | undefined>;
    /**
     * User name used by the application to connect to database
     */
    public readonly databaseUser!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * WordPress instance provisioning state
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Site Url to access the WordPress application
     */
    public /*out*/ readonly siteUrl!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Application version
     */
    public readonly version!: pulumi.Output<string>;

    /**
     * Create a WordpressInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WordpressInstanceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.phpWorkloadName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'phpWorkloadName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.version === undefined) && !opts.urn) {
                throw new Error("Missing required property 'version'");
            }
            resourceInputs["databaseName"] = args ? args.databaseName : undefined;
            resourceInputs["databaseUser"] = args ? args.databaseUser : undefined;
            resourceInputs["phpWorkloadName"] = args ? args.phpWorkloadName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["siteUrl"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["databaseName"] = undefined /*out*/;
            resourceInputs["databaseUser"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["siteUrl"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(WordpressInstance.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WordpressInstance resource.
 */
export interface WordpressInstanceArgs {
    /**
     * Database name used by the application
     */
    databaseName?: pulumi.Input<string>;
    /**
     * User name used by the application to connect to database
     */
    databaseUser?: pulumi.Input<string>;
    /**
     * Php workload name
     */
    phpWorkloadName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Application version
     */
    version: pulumi.Input<string | types.enums.WordpressVersions>;
}