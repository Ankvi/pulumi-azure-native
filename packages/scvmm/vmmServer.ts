import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The VmmServers resource definition.
 * Azure REST API version: 2022-05-21-preview. Prior API version in Azure Native 1.x: 2020-06-05-preview.
 *
 * Other available API versions: 2023-04-01-preview, 2023-10-07, 2024-06-01.
 */
export class VmmServer extends pulumi.CustomResource {
    /**
     * Get an existing VmmServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VmmServer {
        return new VmmServer(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:scvmm:VmmServer';

    /**
     * Returns true if the given object is an instance of VmmServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VmmServer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VmmServer.__pulumiType;
    }

    /**
     * Gets or sets the connection status to the vmmServer.
     */
    public /*out*/ readonly connectionStatus!: pulumi.Output<string>;
    /**
     * Credentials to connect to VMMServer.
     */
    public readonly credentials!: pulumi.Output<types.outputs.VMMServerPropertiesResponseCredentials | undefined>;
    /**
     * Gets or sets any error message if connection to vmmServer is having any issue.
     */
    public /*out*/ readonly errorMessage!: pulumi.Output<string>;
    /**
     * The extended location.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse>;
    /**
     * Fqdn is the hostname/ip of the vmmServer.
     */
    public readonly fqdn!: pulumi.Output<string>;
    /**
     * Gets or sets the location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource Name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Port is the port on which the vmmServer is listening.
     */
    public readonly port!: pulumi.Output<number | undefined>;
    /**
     * Gets or sets the provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The system data.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource Type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Unique ID of vmmServer.
     */
    public /*out*/ readonly uuid!: pulumi.Output<string>;
    /**
     * Version is the version of the vmmSever.
     */
    public /*out*/ readonly version!: pulumi.Output<string>;

    /**
     * Create a VmmServer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VmmServerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.extendedLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'extendedLocation'");
            }
            if ((!args || args.fqdn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fqdn'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["credentials"] = args ? args.credentials : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["fqdn"] = args ? args.fqdn : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vmmServerName"] = args ? args.vmmServerName : undefined;
            resourceInputs["connectionStatus"] = undefined /*out*/;
            resourceInputs["errorMessage"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uuid"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        } else {
            resourceInputs["connectionStatus"] = undefined /*out*/;
            resourceInputs["credentials"] = undefined /*out*/;
            resourceInputs["errorMessage"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["fqdn"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["port"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uuid"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:scvmm/v20200605preview:VmmServer" }, { type: "azure-native:scvmm/v20220521preview:VmmServer" }, { type: "azure-native:scvmm/v20230401preview:VmmServer" }, { type: "azure-native:scvmm/v20231007:VmmServer" }, { type: "azure-native:scvmm/v20240601:VmmServer" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VmmServer.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VmmServer resource.
 */
export interface VmmServerArgs {
    /**
     * Credentials to connect to VMMServer.
     */
    credentials?: pulumi.Input<types.inputs.VMMServerPropertiesCredentialsArgs>;
    /**
     * The extended location.
     */
    extendedLocation: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * Fqdn is the hostname/ip of the vmmServer.
     */
    fqdn: pulumi.Input<string>;
    /**
     * Gets or sets the location.
     */
    location?: pulumi.Input<string>;
    /**
     * Port is the port on which the vmmServer is listening.
     */
    port?: pulumi.Input<number>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of the VMMServer.
     */
    vmmServerName?: pulumi.Input<string>;
}