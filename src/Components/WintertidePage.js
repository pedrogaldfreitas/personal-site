import { Unity, useUnityContext } from "react-unity-webgl";

export default function WintertidePage() {
    const projectFiles = "/UnityGLBuild/Build";

    const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
        loaderUrl: `${projectFiles}/UnityGLBuild.loader.js`,
        dataUrl: `${projectFiles}/UnityGLBuild.data`,
        frameworkUrl: `${projectFiles}/UnityGLBuild.framework.js`,
        codeUrl: `${projectFiles}/UnityGLBuild.wasm`
    });
    
    return (
        <div style={{display:"flex"}}>
            {!isLoaded && <p>Loading... {Math.round(loadingProgression * 100)}</p>}
            <Unity unityProvider={unityProvider} style={{width:"100%", height:"100vh"}} />
        </div>
    )
}