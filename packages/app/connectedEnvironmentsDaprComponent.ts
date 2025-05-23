import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Dapr Component.
 *
 * Uses Azure REST API version 2024-03-01. In version 2.x of the Azure Native provider, it used API version 2022-10-01.
 *
 * Other available API versions: 2022-10-01, 2022-11-01-preview, 2023-04-01-preview, 2023-05-01, 2023-05-02-preview, 2023-08-01-preview, 2023-11-02-preview, 2024-02-02-preview, 2024-08-02-preview, 2024-10-02-preview, 2025-01-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native app [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class ConnectedEnvironmentsDaprComponent extends pulumi.CustomResource {
    /**
     * Get an existing ConnectedEnvironmentsDaprComponent resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ConnectedEnvironmentsDaprComponent {
        return new ConnectedEnvironmentsDaprComponent(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:app:ConnectedEnvironmentsDaprComponent';

    /**
     * Returns true if the given object is an instance of ConnectedEnvironmentsDaprComponent.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ConnectedEnvironmentsDaprComponent {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ConnectedEnvironmentsDaprComponent.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Component type
     */
    public readonly componentType!: pulumi.Output<string | undefined>;
    /**
     * Boolean describing if the component errors are ignores
     */
    public readonly ignoreErrors!: pulumi.Output<boolean | undefined>;
    /**
     * Initialization timeout
     */
    public readonly initTimeout!: pulumi.Output<string | undefined>;
    /**
     * Component metadata
     */
    public readonly metadata!: pulumi.Output<types.outputs.DaprMetadataResponse[] | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Names of container apps that can use this Dapr component
     */
    public readonly scopes!: pulumi.Output<string[] | undefined>;
    /**
     * Name of a Dapr component to retrieve component secrets from
     */
    public readonly secretStoreComponent!: pulumi.Output<string | undefined>;
    /**
     * Collection of secrets used by a Dapr component
     */
    public readonly secrets!: pulumi.Output<types.outputs.SecretResponse[] | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Component version
     */
    public readonly version!: pulumi.Output<string | undefined>;

    /**
     * Create a ConnectedEnvironmentsDaprComponent resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConnectedEnvironmentsDaprComponentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.connectedEnvironmentName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'connectedEnvironmentName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["componentName"] = args ? args.componentName : undefined;
            resourceInputs["componentType"] = args ? args.componentType : undefined;
            resourceInputs["connectedEnvironmentName"] = args ? args.connectedEnvironmentName : undefined;
            resourceInputs["ignoreErrors"] = (args ? args.ignoreErrors : undefined) ?? false;
            resourceInputs["initTimeout"] = args ? args.initTimeout : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scopes"] = args ? args.scopes : undefined;
            resourceInputs["secretStoreComponent"] = args ? args.secretStoreComponent : undefined;
            resourceInputs["secrets"] = args ? args.secrets : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["componentType"] = undefined /*out*/;
            resourceInputs["ignoreErrors"] = undefined /*out*/;
            resourceInputs["initTimeout"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["scopes"] = undefined /*out*/;
            resourceInputs["secretStoreComponent"] = undefined /*out*/;
            resourceInputs["secrets"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:app/v20220601preview:ConnectedEnvironmentsDaprComponent" }, { type: "azure-native:app/v20221001:ConnectedEnvironmentsDaprComponent" }, { type: "azure-native:app/v20221101preview:ConnectedEnvironmentsDaprComponent" }, { type: "azure-native:app/v20230401preview:ConnectedEnvironmentsDaprComponent" }, { type: "azure-native:app/v20230501:ConnectedEnvironmentsDaprComponent" }, { type: "azure-native:app/v20230502preview:ConnectedEnvironmentsDaprComponent" }, { type: "azure-native:app/v20230801preview:ConnectedEnvironmentsDaprComponent" }, { type: "azure-native:app/v20231102preview:ConnectedEnvironmentsDaprComponent" }, { type: "azure-native:app/v20240202preview:ConnectedEnvironmentsDaprComponent" }, { type: "azure-native:app/v20240301:ConnectedEnvironmentsDaprComponent" }, { type: "azure-native:app/v20240802preview:ConnectedEnvironmentsDaprComponent" }, { type: "azure-native:app/v20241002preview:ConnectedEnvironmentsDaprComponent" }, { type: "azure-native:app/v20250101:ConnectedEnvironmentsDaprComponent" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ConnectedEnvironmentsDaprComponent.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ConnectedEnvironmentsDaprComponent resource.
 */
export interface ConnectedEnvironmentsDaprComponentArgs {
    /**
     * Name of the Dapr Component.
     */
    componentName?: pulumi.Input<string>;
    /**
     * Component type
     */
    componentType?: pulumi.Input<string>;
    /**
     * Name of the connected environment.
     */
    connectedEnvironmentName: pulumi.Input<string>;
    /**
     * Boolean describing if the component errors are ignores
     */
    ignoreErrors?: pulumi.Input<boolean>;
    /**
     * Initialization timeout
     */
    initTimeout?: pulumi.Input<string>;
    /**
     * Component metadata
     */
    metadata?: pulumi.Input<pulumi.Input<types.inputs.DaprMetadataArgs>[]>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Names of container apps that can use this Dapr component
     */
    scopes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of a Dapr component to retrieve component secrets from
     */
    secretStoreComponent?: pulumi.Input<string>;
    /**
     * Collection of secrets used by a Dapr component
     */
    secrets?: pulumi.Input<pulumi.Input<types.inputs.SecretArgs>[]>;
    /**
     * Component version
     */
    version?: pulumi.Input<string>;
}