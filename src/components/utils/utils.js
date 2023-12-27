const changeProject = (e) => {
    const { name } = e.target

    if (name === 'prev') {
        const index = projects.indexOf(project)
        if (index === 0) {
            setProject(projects[projects.length - 1])
        } else {
            setProject(projects[index - 1])
        }
    } else {
        const index = projects.indexOf(project)
        if (index === projects.length - 1) {
            setProject(projects[0])
        } else {
            setProject(projects[index + 1])
        }
    }
}

const showSDNProjects = (e) => {
    const sdnProjects = projects.filter(project => project.type === 'SDN')
    console.log(sdnProjects)
    setProject(sdnProjects[0])
}

const shoeCloudProjects = (e) => {
    const cloudProjects = projects.filter(project => project.type === 'Cloud/Fog')
    console.log(cloudProjects)
    setProject(cloudProjects[0])
}

const showHardwareProjects = (e) => {
    const hardwareProjects = projects.filter(project => project.type === 'Hardware')
    console.log(hardwareProjects)
    setProject(hardwareProjects[0])
}

const showAllProjects = (e) => {
    console.log(projects)
    setProject(projects[0])
}


export {
    changeProject,
    showSDNProjects,
    shoeCloudProjects,
    showHardwareProjects,
    showAllProjects
}

