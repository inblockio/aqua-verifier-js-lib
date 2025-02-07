import { createContentRevisionUtil, getFileByHashUtil } from "./core/content";
import { hideFormElementsUtil, LinkAquaObjectToFormUtil, verifyFormUtil } from "./core/forms";
import { linkAquaObjectUtil, linkMultipleAquaObjectsUtil, verifyLinkUtil } from "./core/link";
import { createGenesisRevision, getLastRevisionUtil, getRevisionByHashUtil, removeLastRevisionUtil } from "./core/revision";
import { signAquaObjectUtil, signMultipleAquaObjectsUtil, verifySignatureUtil } from "./core/signature";
import { verifyAquaObjectUtil } from "./core/verify";
import { verifyWitnessUtil, witnessAquaObjectUtil, witnessMultipleAquaObjectsUtil } from "./core/witness";
import { AquaObject, AquaObjectWrapper, AquaOperationData, CredentialsData, FileObject, LogData, Revision, RevisionType, SignType, WitnessNetwork, WitnessPlatformType, WitnessType } from "./types"
import { Result, Err, Ok, isOk, Option } from 'rustic';

export default class AquaTree {

    removeLastRevision = (aquaObject: AquaObject): Result<AquaOperationData, LogData[]> => {
        return removeLastRevisionUtil(aquaObject)
    }

    // Content
    createContentRevision = async (aquaObject: AquaObjectWrapper, fileObject: FileObject, enableScalar: boolean = false): Promise<Result<AquaOperationData, LogData[]>> => {
        return createContentRevisionUtil(aquaObject, fileObject, enableScalar)
    }

    createGenesisRevision = async (fileObject: FileObject, isForm: boolean = false, enableContent: boolean = false, enableScalar: boolean = false): Promise<Result<AquaOperationData, LogData[]>> => {
        return createGenesisRevision(fileObject, isForm, enableContent, enableScalar)
    }

    verifyAquaObject = async (aquaObject: AquaObject, fileObject: Array<FileObject>): Promise<Result<AquaOperationData, LogData[]>> => {
        return verifyAquaObjectUtil(aquaObject, fileObject)
    }

    // Wittness
    verifyWitness = async (witnessRevision: Revision): Promise<Result<AquaOperationData, LogData[]>> => {
        return verifyWitnessUtil(witnessRevision)
    }

    witnessAquaObject = async (aquaObject: AquaObject, witnessType: WitnessType, witnessNetwork: WitnessNetwork, witnessPlatform: WitnessPlatformType, credentials: Option<CredentialsData>, enableScalar: boolean = false): Promise<Result<AquaOperationData, LogData[]>> => {
        return witnessAquaObjectUtil(aquaObject, witnessType, witnessNetwork, witnessPlatform, credentials, enableScalar)
    }

    witnessMultipleAquaObjects = async (aquaObjects: AquaObjectWrapper[], witnessType: WitnessType, witnessNetwork: WitnessNetwork, witnessPlatform: WitnessPlatformType, credentials: Option<CredentialsData>, enableScalar: boolean = false): Promise<Result<AquaOperationData, LogData[]>> => {
        return witnessMultipleAquaObjectsUtil(aquaObjects, witnessType, witnessNetwork, witnessPlatform, credentials, enableScalar)
    }


    // Signature
    verifySignature = async (signature: Revision): Promise<Result<AquaOperationData, LogData[]>> => {
        return verifySignatureUtil(signature)
    }

    signAquaObject = async (aquaObject: AquaObjectWrapper, hash: string, signType: SignType, credentials: Option<CredentialsData>, enableScalar: boolean = false): Promise<Result<AquaOperationData, LogData[]>> => {
        return signAquaObjectUtil(aquaObject, hash, signType, credentials, enableScalar)
    }

    signMultipleAquaObjects = async (aquaObjects: AquaObjectWrapper[], signType: SignType, credentials: Option<CredentialsData>): Promise<Result<AquaOperationData, LogData[]>> => {
        return signMultipleAquaObjectsUtil(aquaObjects, signType, credentials)
    }

    // Link 
    verifyLink = async (linkRevision: Revision): Promise<Result<AquaOperationData, LogData[]>> => {
        return verifyLinkUtil(linkRevision)
    }

    linkAquaObject = async (aquaObject: AquaObject): Promise<Result<AquaOperationData, LogData[]>> => {
        return linkAquaObjectUtil(aquaObject)
    }

    linkMultipleAquaObjects = async (aquaObjects: AquaObjectWrapper[]): Promise<Result<AquaOperationData, LogData[]>> => {
        return linkMultipleAquaObjectsUtil(aquaObjects)
    }

    // Forms -- also and form key ,remove form key
    verifyForm = async (formRevision: Revision): Promise<Result<AquaOperationData, LogData[]>> => {
        return verifyFormUtil(formRevision)
    }

    LinkAquaObjectToForm = async (aquaObject: AquaObject): Promise<Result<AquaOperationData, LogData[]>> => {
        return LinkAquaObjectToFormUtil(aquaObject)
    }

    hideFormElements = async (aquaObject: AquaObject, elementsToHide: Array<string>): Promise<Result<AquaOperationData, LogData[]>> => {
        return hideFormElementsUtil(aquaObject, elementsToHide)
    }


    // Revisions
    getRevisionByHash = (aquaObject: AquaObject, hash: string): Result<Revision, LogData[]> => {
        return getRevisionByHashUtil(aquaObject, hash)
    }

    // Revisions
    getLastRevision = (aquaObject: AquaObject): Result<Revision, LogData[]> => {
        return getLastRevisionUtil(aquaObject)
    }

    // get file
    getFileByHash = async (aquaObject: AquaObject, hash: string): Promise<Result<string, LogData[]>> => {
        return getFileByHashUtil(aquaObject, hash)
    }

}
