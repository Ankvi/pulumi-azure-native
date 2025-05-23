import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Customer creates a spacecraft resource to schedule a contact.
 *
 * Uses Azure REST API version 2022-11-01. In version 2.x of the Azure Native provider, it used API version 2022-11-01.
 */
export class Spacecraft extends pulumi.CustomResource {
    /**
     * Get an existing Spacecraft resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Spacecraft {
        return new Spacecraft(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:orbital:Spacecraft';

    /**
     * Returns true if the given object is an instance of Spacecraft.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Spacecraft {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Spacecraft.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Immutable list of Spacecraft links.
     */
    public readonly links!: pulumi.Output<types.outputs.SpacecraftLinkResponse[]>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * NORAD ID of the spacecraft.
     */
    public readonly noradId!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Title line of the two-line element set (TLE).
     */
    public readonly titleLine!: pulumi.Output<string>;
    /**
     * Line 1 of the two-line element set (TLE).
     */
    public readonly tleLine1!: pulumi.Output<string>;
    /**
     * Line 2 of the two-line element set (TLE).
     */
    public readonly tleLine2!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Spacecraft resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SpacecraftArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.links === undefined) && !opts.urn) {
                throw new Error("Missing required property 'links'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.titleLine === undefined) && !opts.urn) {
                throw new Error("Missing required property 'titleLine'");
            }
            if ((!args || args.tleLine1 === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tleLine1'");
            }
            if ((!args || args.tleLine2 === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tleLine2'");
            }
            resourceInputs["links"] = args ? args.links : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["noradId"] = args ? args.noradId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["spacecraftName"] = args ? args.spacecraftName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["titleLine"] = args ? args.titleLine : undefined;
            resourceInputs["tleLine1"] = args ? args.tleLine1 : undefined;
            resourceInputs["tleLine2"] = args ? args.tleLine2 : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["links"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["noradId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["titleLine"] = undefined /*out*/;
            resourceInputs["tleLine1"] = undefined /*out*/;
            resourceInputs["tleLine2"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:orbital/v20220301:Spacecraft" }, { type: "azure-native:orbital/v20221101:Spacecraft" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Spacecraft.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Spacecraft resource.
 */
export interface SpacecraftArgs {
    /**
     * Immutable list of Spacecraft links.
     */
    links: pulumi.Input<pulumi.Input<types.inputs.SpacecraftLinkArgs>[]>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * NORAD ID of the spacecraft.
     */
    noradId?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Spacecraft ID.
     */
    spacecraftName?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Title line of the two-line element set (TLE).
     */
    titleLine: pulumi.Input<string>;
    /**
     * Line 1 of the two-line element set (TLE).
     */
    tleLine1: pulumi.Input<string>;
    /**
     * Line 2 of the two-line element set (TLE).
     */
    tleLine2: pulumi.Input<string>;
}