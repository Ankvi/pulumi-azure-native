import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure REST API version: 2019-10-01. Prior API version in Azure Native 1.x: 2019-10-01
 */
export class ImportCollector extends pulumi.CustomResource {
    /**
     * Get an existing ImportCollector resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ImportCollector {
        return new ImportCollector(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:migrate:ImportCollector';

    /**
     * Returns true if the given object is an instance of ImportCollector.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ImportCollector {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ImportCollector.__pulumiType;
    }

    public readonly eTag!: pulumi.Output<string | undefined>;
    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly properties!: pulumi.Output<types.outputs.migrate.ImportCollectorPropertiesResponse>;
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ImportCollector resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ImportCollectorArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.projectName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["eTag"] = args ? args.eTag : undefined;
            resourceInputs["importCollectorName"] = args ? args.importCollectorName : undefined;
            resourceInputs["projectName"] = args ? args.projectName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["eTag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:migrate/v20191001:ImportCollector" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ImportCollector.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ImportCollector resource.
 */
export interface ImportCollectorArgs {
    eTag?: pulumi.Input<string>;
    /**
     * Unique name of a Import collector within a project.
     */
    importCollectorName?: pulumi.Input<string>;
    /**
     * Name of the Azure Migrate project.
     */
    projectName: pulumi.Input<string>;
    properties?: pulumi.Input<types.inputs.migrate.ImportCollectorPropertiesArgs>;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    resourceGroupName: pulumi.Input<string>;
}
