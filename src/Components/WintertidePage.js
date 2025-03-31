import { Unity, useUnityContext } from "react-unity-webgl";
import { useEffect } from "react";

//NOTE: This is for the WebGL version of SFU Wintertide. It runs way too slow on browser, so save it for the future.

export default function WintertidePage() {
    const projectFiles = "/UnityGLBuild/Build";

    const { unityProvider, isLoaded, loadingProgression, unload } = useUnityContext({
        loaderUrl: `${projectFiles}/UnityGLBuild.loader.js`,
        dataUrl: `${projectFiles}/UnityGLBuild.data`,
        frameworkUrl: `${projectFiles}/UnityGLBuild.framework.js`,
        codeUrl: `${projectFiles}/UnityGLBuild.wasm`
    });
    
    useEffect(() => {
        return () => {
            // if (unityInstance && typeof unityInstance.quit === "function") {
            //     unityInstance.quit().then(() => {
            //         unload().catch(console.error);
            //     })
            // }
            
            if (isLoaded) {
                unload().catch((err) => {
                    console.warn("Error unloading Unity: " + err);
                })
            }
        };
    }, [unload]);

    return (
        <div style={{display:"flex"}}>
            {!isLoaded && <p>Loading... {Math.round(loadingProgression * 100)}</p>}
            <Unity unityProvider={unityProvider} style={{width:"100%", height:"100vh"}} />
        </div>
    )
}