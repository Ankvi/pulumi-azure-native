import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a container on the  Data Box Edge/Gateway device.
 *
 * Uses Azure REST API version 2023-07-01. In version 2.x of the Azure Native provider, it used API version 2022-03-01.
 *
 * Other available API versions: 2022-03-01, 2022-04-01-preview, 2022-12-01-preview, 2023-01-01-preview, 2023-12-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native databoxedge [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Container extends pulumi.CustomResource {
    /**
     * Get an existing Container resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Container {
        return new Container(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:databoxedge:Container';

    /**
     * Returns true if the given object is an instance of Container.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Container {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Container.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Current status of the container.
     */
    public /*out*/ readonly containerStatus!: pulumi.Output<string>;
    /**
     * The UTC time when container got created.
     */
    public /*out*/ readonly createdDateTime!: pulumi.Output<string>;
    /**
     * DataFormat for Container
     */
    public readonly dataFormat!: pulumi.Output<string>;
    /**
     * The object name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Details of the refresh job on this container.
     */
    public /*out*/ readonly refreshDetails!: pulumi.Output<types.outputs.RefreshDetailsResponse>;
    /**
     * Metadata pertaining to creation and last modification of Container
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The hierarchical type of the object.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Container resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ContainerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.dataFormat === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataFormat'");
            }
            if ((!args || args.deviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'deviceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.storageAccountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storageAccountName'");
            }
            resourceInputs["containerName"] = args ? args.containerName : undefined;
            resourceInputs["dataFormat"] = args ? args.dataFormat : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["storageAccountName"] = args ? args.storageAccountName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["containerStatus"] = undefined /*out*/;
            resourceInputs["createdDateTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["refreshDetails"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["containerStatus"] = undefined /*out*/;
            resourceInputs["createdDateTime"] = undefined /*out*/;
            resourceInputs["dataFormat"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["refreshDetails"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:databoxedge/v20190801:Container" }, { type: "azure-native:databoxedge/v20200501preview:Container" }, { type: "azure-native:databoxedge/v20200901:Container" }, { type: "azure-native:databoxedge/v20200901preview:Container" }, { type: "azure-native:databoxedge/v20201201:Container" }, { type: "azure-native:databoxedge/v20210201:Container" }, { type: "azure-native:databoxedge/v20210201preview:Container" }, { type: "azure-native:databoxedge/v20210601:Container" }, { type: "azure-native:databoxedge/v20210601preview:Container" }, { type: "azure-native:databoxedge/v20220301:Container" }, { type: "azure-native:databoxedge/v20220401preview:Container" }, { type: "azure-native:databoxedge/v20221201preview:Container" }, { type: "azure-native:databoxedge/v20230101preview:Container" }, { type: "azure-native:databoxedge/v20230701:Container" }, { type: "azure-native:databoxedge/v20231201:Container" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Container.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Container resource.
 */
export interface ContainerArgs {
    /**
     * The container name.
     */
    containerName?: pulumi.Input<string>;
    /**
     * DataFormat for Container
     */
    dataFormat: pulumi.Input<string | types.enums.AzureContainerDataFormat>;
    /**
     * The device name.
     */
    deviceName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Storage Account Name
     */
    storageAccountName: pulumi.Input<string>;
}