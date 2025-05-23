import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Resource representation of a workflow
 *
 * Uses Azure REST API version 2023-08-01. In version 2.x of the Azure Native provider, it used API version 2022-10-11-preview.
 *
 * Other available API versions: 2022-10-11-preview, 2024-05-01-preview, 2024-08-01-preview, 2025-03-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native devhub [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Workflow extends pulumi.CustomResource {
    /**
     * Get an existing Workflow resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Workflow {
        return new Workflow(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:devhub:Workflow';

    /**
     * Returns true if the given object is an instance of Workflow.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Workflow {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Workflow.__pulumiType;
    }

    /**
     * The name of the app.
     */
    public readonly appName!: pulumi.Output<string | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The version of the language image used for building the code in the generated dockerfile.
     */
    public readonly builderVersion!: pulumi.Output<string | undefined>;
    /**
     * The mode of generation to be used for generating Dockerfiles.
     */
    public readonly dockerfileGenerationMode!: pulumi.Output<string | undefined>;
    /**
     * The directory to output the generated Dockerfile to.
     */
    public readonly dockerfileOutputDirectory!: pulumi.Output<string | undefined>;
    /**
     * The programming language used.
     */
    public readonly generationLanguage!: pulumi.Output<string | undefined>;
    /**
     * Profile of a github workflow.
     */
    public readonly githubWorkflowProfile!: pulumi.Output<types.outputs.GitHubWorkflowProfileResponse | undefined>;
    /**
     * The name of the image to be generated.
     */
    public readonly imageName!: pulumi.Output<string | undefined>;
    /**
     * The tag to apply to the generated image.
     */
    public readonly imageTag!: pulumi.Output<string | undefined>;
    /**
     * The version of the language image used for execution in the generated dockerfile.
     */
    public readonly languageVersion!: pulumi.Output<string | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The mode of generation to be used for generating Manifest.
     */
    public readonly manifestGenerationMode!: pulumi.Output<string | undefined>;
    /**
     * The directory to output the generated manifests to.
     */
    public readonly manifestOutputDirectory!: pulumi.Output<string | undefined>;
    /**
     * Determines the type of manifests to be generated.
     */
    public readonly manifestType!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The namespace to deploy the application to.
     */
    public readonly namespace!: pulumi.Output<string | undefined>;
    /**
     * The port the application is exposed on.
     */
    public readonly port!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Workflow resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkflowArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["appName"] = args ? args.appName : undefined;
            resourceInputs["builderVersion"] = args ? args.builderVersion : undefined;
            resourceInputs["dockerfileGenerationMode"] = args ? args.dockerfileGenerationMode : undefined;
            resourceInputs["dockerfileOutputDirectory"] = args ? args.dockerfileOutputDirectory : undefined;
            resourceInputs["generationLanguage"] = args ? args.generationLanguage : undefined;
            resourceInputs["githubWorkflowProfile"] = args ? args.githubWorkflowProfile : undefined;
            resourceInputs["imageName"] = args ? args.imageName : undefined;
            resourceInputs["imageTag"] = args ? args.imageTag : undefined;
            resourceInputs["languageVersion"] = args ? args.languageVersion : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["manifestGenerationMode"] = args ? args.manifestGenerationMode : undefined;
            resourceInputs["manifestOutputDirectory"] = args ? args.manifestOutputDirectory : undefined;
            resourceInputs["manifestType"] = args ? args.manifestType : undefined;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["workflowName"] = args ? args.workflowName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["appName"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["builderVersion"] = undefined /*out*/;
            resourceInputs["dockerfileGenerationMode"] = undefined /*out*/;
            resourceInputs["dockerfileOutputDirectory"] = undefined /*out*/;
            resourceInputs["generationLanguage"] = undefined /*out*/;
            resourceInputs["githubWorkflowProfile"] = undefined /*out*/;
            resourceInputs["imageName"] = undefined /*out*/;
            resourceInputs["imageTag"] = undefined /*out*/;
            resourceInputs["languageVersion"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["manifestGenerationMode"] = undefined /*out*/;
            resourceInputs["manifestOutputDirectory"] = undefined /*out*/;
            resourceInputs["manifestType"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["namespace"] = undefined /*out*/;
            resourceInputs["port"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:devhub/v20220401preview:Workflow" }, { type: "azure-native:devhub/v20221011preview:Workflow" }, { type: "azure-native:devhub/v20230801:Workflow" }, { type: "azure-native:devhub/v20240501preview:Workflow" }, { type: "azure-native:devhub/v20240801preview:Workflow" }, { type: "azure-native:devhub/v20250301preview:Workflow" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Workflow.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Workflow resource.
 */
export interface WorkflowArgs {
    /**
     * The name of the app.
     */
    appName?: pulumi.Input<string>;
    /**
     * The version of the language image used for building the code in the generated dockerfile.
     */
    builderVersion?: pulumi.Input<string>;
    /**
     * The mode of generation to be used for generating Dockerfiles.
     */
    dockerfileGenerationMode?: pulumi.Input<string | types.enums.DockerfileGenerationMode>;
    /**
     * The directory to output the generated Dockerfile to.
     */
    dockerfileOutputDirectory?: pulumi.Input<string>;
    /**
     * The programming language used.
     */
    generationLanguage?: pulumi.Input<string | types.enums.GenerationLanguage>;
    /**
     * Profile of a github workflow.
     */
    githubWorkflowProfile?: pulumi.Input<types.inputs.GitHubWorkflowProfileArgs>;
    /**
     * The name of the image to be generated.
     */
    imageName?: pulumi.Input<string>;
    /**
     * The tag to apply to the generated image.
     */
    imageTag?: pulumi.Input<string>;
    /**
     * The version of the language image used for execution in the generated dockerfile.
     */
    languageVersion?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The mode of generation to be used for generating Manifest.
     */
    manifestGenerationMode?: pulumi.Input<string | types.enums.ManifestGenerationMode>;
    /**
     * The directory to output the generated manifests to.
     */
    manifestOutputDirectory?: pulumi.Input<string>;
    /**
     * Determines the type of manifests to be generated.
     */
    manifestType?: pulumi.Input<string | types.enums.GenerationManifestType>;
    /**
     * The namespace to deploy the application to.
     */
    namespace?: pulumi.Input<string>;
    /**
     * The port the application is exposed on.
     */
    port?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the workflow resource.
     */
    workflowName?: pulumi.Input<string>;
}