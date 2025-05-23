import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a share on the  Data Box Edge/Gateway device.
 *
 * Uses Azure REST API version 2023-07-01. In version 2.x of the Azure Native provider, it used API version 2022-03-01.
 *
 * Other available API versions: 2022-03-01, 2022-04-01-preview, 2022-12-01-preview, 2023-01-01-preview, 2023-12-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native databoxedge [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Share extends pulumi.CustomResource {
    /**
     * Get an existing Share resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Share {
        return new Share(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:databoxedge:Share';

    /**
     * Returns true if the given object is an instance of Share.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Share {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Share.__pulumiType;
    }

    /**
     * Access protocol to be used by the share.
     */
    public readonly accessProtocol!: pulumi.Output<string>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Azure container mapping for the share.
     */
    public readonly azureContainerInfo!: pulumi.Output<types.outputs.AzureContainerInfoResponse | undefined>;
    /**
     * List of IP addresses and corresponding access rights on the share(required for NFS protocol).
     */
    public readonly clientAccessRights!: pulumi.Output<types.outputs.ClientAccessRightResponse[] | undefined>;
    /**
     * Data policy of the share.
     */
    public readonly dataPolicy!: pulumi.Output<string | undefined>;
    /**
     * Description for the share.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Current monitoring status of the share.
     */
    public readonly monitoringStatus!: pulumi.Output<string>;
    /**
     * The object name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Details of the refresh job on this share.
     */
    public readonly refreshDetails!: pulumi.Output<types.outputs.RefreshDetailsResponse | undefined>;
    /**
     * Share mount point to the role.
     */
    public /*out*/ readonly shareMappings!: pulumi.Output<types.outputs.MountPointMapResponse[]>;
    /**
     * Current status of the share.
     */
    public readonly shareStatus!: pulumi.Output<string>;
    /**
     * Metadata pertaining to creation and last modification of Share
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The hierarchical type of the object.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Mapping of users and corresponding access rights on the share (required for SMB protocol).
     */
    public readonly userAccessRights!: pulumi.Output<types.outputs.UserAccessRightResponse[] | undefined>;

    /**
     * Create a Share resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ShareArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accessProtocol === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accessProtocol'");
            }
            if ((!args || args.deviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'deviceName'");
            }
            if ((!args || args.monitoringStatus === undefined) && !opts.urn) {
                throw new Error("Missing required property 'monitoringStatus'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.shareStatus === undefined) && !opts.urn) {
                throw new Error("Missing required property 'shareStatus'");
            }
            resourceInputs["accessProtocol"] = args ? args.accessProtocol : undefined;
            resourceInputs["azureContainerInfo"] = args ? args.azureContainerInfo : undefined;
            resourceInputs["clientAccessRights"] = args ? args.clientAccessRights : undefined;
            resourceInputs["dataPolicy"] = args ? args.dataPolicy : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["monitoringStatus"] = args ? args.monitoringStatus : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["refreshDetails"] = args ? args.refreshDetails : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["shareStatus"] = args ? args.shareStatus : undefined;
            resourceInputs["userAccessRights"] = args ? args.userAccessRights : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["shareMappings"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["accessProtocol"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["azureContainerInfo"] = undefined /*out*/;
            resourceInputs["clientAccessRights"] = undefined /*out*/;
            resourceInputs["dataPolicy"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["monitoringStatus"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["refreshDetails"] = undefined /*out*/;
            resourceInputs["shareMappings"] = undefined /*out*/;
            resourceInputs["shareStatus"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userAccessRights"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:databoxedge/v20190301:Share" }, { type: "azure-native:databoxedge/v20190701:Share" }, { type: "azure-native:databoxedge/v20190801:Share" }, { type: "azure-native:databoxedge/v20200501preview:Share" }, { type: "azure-native:databoxedge/v20200901:Share" }, { type: "azure-native:databoxedge/v20200901preview:Share" }, { type: "azure-native:databoxedge/v20201201:Share" }, { type: "azure-native:databoxedge/v20210201:Share" }, { type: "azure-native:databoxedge/v20210201preview:Share" }, { type: "azure-native:databoxedge/v20210601:Share" }, { type: "azure-native:databoxedge/v20210601preview:Share" }, { type: "azure-native:databoxedge/v20220301:Share" }, { type: "azure-native:databoxedge/v20220401preview:Share" }, { type: "azure-native:databoxedge/v20221201preview:Share" }, { type: "azure-native:databoxedge/v20230101preview:Share" }, { type: "azure-native:databoxedge/v20230701:Share" }, { type: "azure-native:databoxedge/v20231201:Share" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Share.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Share resource.
 */
export interface ShareArgs {
    /**
     * Access protocol to be used by the share.
     */
    accessProtocol: pulumi.Input<string | types.enums.ShareAccessProtocol>;
    /**
     * Azure container mapping for the share.
     */
    azureContainerInfo?: pulumi.Input<types.inputs.AzureContainerInfoArgs>;
    /**
     * List of IP addresses and corresponding access rights on the share(required for NFS protocol).
     */
    clientAccessRights?: pulumi.Input<pulumi.Input<types.inputs.ClientAccessRightArgs>[]>;
    /**
     * Data policy of the share.
     */
    dataPolicy?: pulumi.Input<string | types.enums.DataPolicy>;
    /**
     * Description for the share.
     */
    description?: pulumi.Input<string>;
    /**
     * The device name.
     */
    deviceName: pulumi.Input<string>;
    /**
     * Current monitoring status of the share.
     */
    monitoringStatus: pulumi.Input<string | types.enums.MonitoringStatus>;
    /**
     * The share name.
     */
    name?: pulumi.Input<string>;
    /**
     * Details of the refresh job on this share.
     */
    refreshDetails?: pulumi.Input<types.inputs.RefreshDetailsArgs>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Current status of the share.
     */
    shareStatus: pulumi.Input<string | types.enums.ShareStatus>;
    /**
     * Mapping of users and corresponding access rights on the share (required for SMB protocol).
     */
    userAccessRights?: pulumi.Input<pulumi.Input<types.inputs.UserAccessRightArgs>[]>;
}