import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A workbook definition.
 * Azure REST API version: 2022-04-01. Prior API version in Azure Native 1.x: 2020-10-20.
 *
 * Other available API versions: 2015-05-01, 2021-03-08, 2021-08-01, 2023-06-01.
 */
export class Workbook extends pulumi.CustomResource {
    /**
     * Get an existing Workbook resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Workbook {
        return new Workbook(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:insights:Workbook';

    /**
     * Returns true if the given object is an instance of Workbook.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Workbook {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Workbook.__pulumiType;
    }

    /**
     * Workbook category, as defined by the user at creation time.
     */
    public readonly category!: pulumi.Output<string>;
    /**
     * The description of the workbook.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The user-defined name (display name) of the workbook.
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * Resource etag
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * Identity used for BYOS
     */
    public readonly identity!: pulumi.Output<types.outputs.WorkbookResourceResponseIdentity | undefined>;
    /**
     * The kind of workbook. Only valid value is shared.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The unique revision id for this workbook definition
     */
    public /*out*/ readonly revision!: pulumi.Output<string>;
    /**
     * Configuration of this particular workbook. Configuration data is a string containing valid JSON
     */
    public readonly serializedData!: pulumi.Output<string>;
    /**
     * ResourceId for a source resource.
     */
    public readonly sourceId!: pulumi.Output<string | undefined>;
    /**
     * The resourceId to the storage account when bring your own storage is used
     */
    public readonly storageUri!: pulumi.Output<string | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Date and time in UTC of the last modification that was made to this workbook definition.
     */
    public /*out*/ readonly timeModified!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Unique user id of the specific user that owns this workbook.
     */
    public /*out*/ readonly userId!: pulumi.Output<string>;
    /**
     * Workbook schema version format, like 'Notebook/1.0', which should match the workbook in serializedData
     */
    public readonly version!: pulumi.Output<string | undefined>;

    /**
     * Create a Workbook resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkbookArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.category === undefined) && !opts.urn) {
                throw new Error("Missing required property 'category'");
            }
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serializedData === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serializedData'");
            }
            resourceInputs["category"] = args ? args.category : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["serializedData"] = args ? args.serializedData : undefined;
            resourceInputs["sourceId"] = args ? args.sourceId : undefined;
            resourceInputs["storageUri"] = args ? args.storageUri : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["revision"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["timeModified"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userId"] = undefined /*out*/;
        } else {
            resourceInputs["category"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["revision"] = undefined /*out*/;
            resourceInputs["serializedData"] = undefined /*out*/;
            resourceInputs["sourceId"] = undefined /*out*/;
            resourceInputs["storageUri"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["timeModified"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userId"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:insights/v20150501:Workbook" }, { type: "azure-native:insights/v20180617preview:Workbook" }, { type: "azure-native:insights/v20201020:Workbook" }, { type: "azure-native:insights/v20210308:Workbook" }, { type: "azure-native:insights/v20210801:Workbook" }, { type: "azure-native:insights/v20220401:Workbook" }, { type: "azure-native:insights/v20230601:Workbook" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Workbook.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Workbook resource.
 */
export interface WorkbookArgs {
    /**
     * Workbook category, as defined by the user at creation time.
     */
    category: pulumi.Input<string>;
    /**
     * The description of the workbook.
     */
    description?: pulumi.Input<string>;
    /**
     * The user-defined name (display name) of the workbook.
     */
    displayName: pulumi.Input<string>;
    /**
     * Identity used for BYOS
     */
    identity?: pulumi.Input<types.inputs.WorkbookResourceIdentityArgs>;
    /**
     * The kind of workbook. Only valid value is shared.
     */
    kind?: pulumi.Input<string | types.enums.WorkbookSharedTypeKind>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the resource.
     */
    resourceName?: pulumi.Input<string>;
    /**
     * Configuration of this particular workbook. Configuration data is a string containing valid JSON
     */
    serializedData: pulumi.Input<string>;
    /**
     * ResourceId for a source resource.
     */
    sourceId?: pulumi.Input<string>;
    /**
     * The resourceId to the storage account when bring your own storage is used
     */
    storageUri?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Workbook schema version format, like 'Notebook/1.0', which should match the workbook in serializedData
     */
    version?: pulumi.Input<string>;
}