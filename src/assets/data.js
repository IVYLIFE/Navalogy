import { ICONS } from "./constants/icons";
import { IMAGES } from "./constants/images";

const publications = [

    {
        id: 1,
        title: `Performances of M2M Protocols in Internet of Medical Things" Accepted in IEEE WS16 ICC'2023 Workshop - SIGNIS`,
        description: `The Internet of Medical Things (IoMT) is a constantly developing idea that aims to connect the medical IoT devices used in the  healthcare industry. 
                        IoMT devices use their environment to detect, collect and send vital information about the medical parameters  of a user/patient. 
                        This data can be then used for health monitoring of patients remotely and predicting their health conditions. Now, in order to transmit this huge 
                        amount of data and information IoT devices need to adopt certain machine-to-machine (M2M) communication protocols. In IoMT,
                        it is very much crucial to choose the right protocol for the communication of critical data. In this paper, we are evaluating the performances of the 
                        four most widely used M2M protocols such as - Message Queuing Telemetry Transport Protocol (MQTT), Advanced Message Queuing Protocol 
                        (AMQP), Extensible Messaging and Presence Protocol (XMPP), and Constrained Application Protocol (CoAP), in terms of packet size and Round 
                        Trip Time (RTT) which are two essential factors in terms of transmission of medical data. Performances of these protocols are tested in an IoMT kit developed using several medical as well as general purpose sensors. We also compare the protocols based on their security and QoS features for their suitability to IoMT. Based on the experimental results and feature comparisons, MQTT proves to be the most suitable M2M protocol for IoMT.`,
        image: "",
        icon : ICONS.icon_1,
    },

    {
        id: 2,
        title: `"iRASA: Fog Scheduling With Congregation of MVO and PSO" in IEEE I3CS-2023 Awarded 2nd Prize Under Best Paper Category in I3CS-2023`,
        description: `Intrusion Detection System (IDS) is a system that monitors and analyses the network traffic for detecting the malicious activities and attacks. 
                        IDS can be classified into two types: Misuse Detection System (MDS) and Anomaly Detection System (ADS). MDS is based on the signature database 
                        and it can detect only the known attacks. ADS is based on the normal behaviour of the network and it can detect both known and unknown attacks. 
                        Machine Learning (ML) techniques are used in ADS for detecting the unknown attacks. In this paper, we have surveyed the ML techniques used in ADS 
                        for detecting the unknown attacks. We have also discussed the advantages and disadvantages of the ML techniques used in ADS.`,
        image: "",
        icon : ICONS.icon_2,
    },

    {
        id: 3,
        title: `Performances of M2M Protocols in Internet of Medical Things" Accepted in IEEE WS16 ICC'2023 Workshop - SIGNIS`,
        description: `Intrusion Detection System (IDS) is a system that monitors and analyses the network traffic for detecting the malicious activities and attacks. 
                        IDS can be classified into two types: Misuse Detection System (MDS) and Anomaly Detection System (ADS). MDS is based on the signature database 
                        and it can detect only the known attacks. ADS is based on the normal behaviour of the network and it can detect both known and unknown attacks. 
                        Machine Learning (ML) techniques are used in ADS for detecting the unknown attacks. In this paper, we have surveyed the ML techniques used in ADS 
                        for detecting the unknown attacks. We have also discussed the advantages and disadvantages of the ML techniques used in ADS.`,
        image: "",
        icon : ICONS.icon_3,
    },

    {
        id: 4,
        title: `Performances of M2M Protocols in Internet of Medical Things" Accepted in IEEE WS16 ICC'2023 Workshop - SIGNIS`,
        description: `Intrusion Detection System (IDS) is a system that monitors and analyses the network traffic for detecting the malicious activities and attacks. 
                        IDS can be classified into two types: Misuse Detection System (MDS) and Anomaly Detection System (ADS). MDS is based on the signature database 
                        and it can detect only the known attacks. ADS is based on the normal behaviour of the network and it can detect both known and unknown attacks. 
                        Machine Learning (ML) techniques are used in ADS for detecting the unknown attacks. In this paper, we have surveyed the ML techniques used in ADS
                        for detecting the unknown attacks. We have also discussed the advantages and disadvantages of the ML techniques used in ADS.`,
        image: "",
        icon : ICONS.icon_4,
    },

];



const projects = [

    {
        id: 1,
        type: "SDN",
        title: `Dynamic Network Orchestrator`,
        image: IMAGES.project_1,
        short_description: `The Dynamic Network Orchestrator is a Software-Defined Networking (SDN) solution that redefines network management. 
        This project introduces flexibility, automation, and centralized control, revolutionizing the way networks are configured and operated.`,
    
        long_description: [
            {
                title: "Centralized Control",
                desc: `With SDN principles, the Dynamic Network Orchestrator centralizes control, allowing administrators to dynamically manage network resources and traffic flow.`,
                img: IMAGES.project_desc_1,
            },
    
            {
                title: "Automated Configuration",
                desc: `Automation plays a key role in this project, enabling automatic configuration and optimization of network components, leading to improved efficiency.`,
                img: IMAGES.project_desc_2,
            },
    
            {
                title: "Adaptive Routing",
                desc: `Implementing adaptive routing algorithms, this SDN solution intelligently adapts to changing network conditions, ensuring optimal performance and resource utilization.`,
                img: IMAGES.project_desc_3,
            },
    
            {
                title: "Advanced Traffic Analysis",
                desc: `The Dynamic Network Orchestrator includes advanced traffic analysis tools, providing insights into network behavior and facilitating informed decision-making.`,
                img: IMAGES.project_desc_4,
            },
        ],
    },

    {
        id: 2,
        type: "Cloud/Fog",
        title: `Smart Cloud Hub`,
        image: IMAGES.project_1,
        short_description: `The Smart Cloud Hub is a groundbreaking project that leverages cloud and fog computing to enhance data processing and storage capabilities. 
        This innovative solution ensures seamless connectivity, real-time data analysis, and efficient resource management for diverse applications.`,
    
        long_description: [
            {
                title: "Cloud Computing",
                desc: `Utilizing advanced cloud computing technologies, the Smart Cloud Hub offers scalable and on-demand resources, enabling robust data storage and processing.`,
                img: IMAGES.project_desc_1,
            },
    
            {
                title: "Fog Computing",
                desc: `Incorporating fog computing at the edge, this project minimizes latency and optimizes data processing by distributing computing tasks closer to the data source.`,
                img: IMAGES.project_desc_2,
            },
    
            {
                title: "Security Measures",
                desc: `To ensure data integrity and confidentiality, the Smart Cloud Hub implements state-of-the-art security measures, making it a reliable solution for sensitive applications.`,
                img: IMAGES.project_desc_3,
            },
    
            {
                title: "Scalability and Flexibility",
                desc: `Designed for scalability and flexibility, the Smart Cloud Hub adapts to varying workloads and application demands, providing a versatile cloud and fog computing solution.`,
                img: IMAGES.project_desc_4,
            },
        ],
    },

    {
        id: 3,
        type: "Hardware",
        title: `Smart Wearable Health Monitor`,
        image: IMAGES.project_1,
        short_description: `The Smart Wearable Health Monitor is an advanced hardware project designed to provide real-time health tracking and monitoring. 
        This wearable device seamlessly integrates sensors and connectivity to empower users with insights into their well-being.`,
    
        long_description: [
            {
                title: "Health Tracking",
                desc: `Equipped with a variety of sensors, the Smart Wearable Health Monitor tracks vital signs, physical activity, and sleep patterns, promoting a holistic approach to health monitoring.`,
                img: IMAGES.project_desc_1,
            },
    
            {
                title: "Wireless Connectivity",
                desc: `With wireless connectivity features, users can sync and view their health data on mobile devices, fostering proactive health management and timely interventions.`,
                img: IMAGES.project_desc_2,
            },
    
            {
                title: "User-Friendly Interface",
                desc: `The device boasts a user-friendly interface, making it easy for individuals to access and interpret their health data, encouraging a more informed and healthier lifestyle.`,
                img: IMAGES.project_desc_3,
            },
    
            {
                title: "Long Battery Life",
                desc: `Designed for extended use, the Smart Wearable Health Monitor features a long-lasting battery, ensuring continuous health monitoring without frequent recharging.`,
                img: IMAGES.project_desc_4,
            },
        ],
    },

    {
        id: 4,
        type : "Hardware",
        title: `Smart MediGlove`,
        image: IMAGES.project_1,
        short_description: `The Smart Medi-Glove is an innovative Internet of Things (IoT) project designed to revolutionize the healthcare industry, 
        specifically in the field of medical examinations and diagnostics.This advanced medical glove seamlessly integrates cutting-edge 
        hardware technology to providereal-time data and insights, enhancing the efficiency and accuracy of medical procedures.`,

        long_description : [
            {
                title : "Biometric Sensing",
                desc : `Embedded sensors in the glove monitor vital signs such as heart rate, temperature, and blood pressure, providing instant health assessments during patient examinations.`,
                img : IMAGES.project_desc_1,
            },

            {
                title : "Wireless Connectivity",
                desc : `Integrated gesture recognition technology allows for intuitive and hands-free control of connected devices and medical equipment, enhancing the overall user experience for healthcare professionals.`,
                img : IMAGES.project_desc_2,
            },

            {
                title : "Biometric Sensing",
                desc : `Embedded sensors in the glove 
                monitor vital signs such as heart rate, temperature, and blood pressure, providing instant health assessments during patient examinations.`,
                img : IMAGES.project_desc_3,
            },

            {
                title : "Gesture Recognition ",
                desc : `Integrated gesture recognition technology allows for intuitive and hands-free control of connected devices and medical equipment, enhancing the overall user experience for healthcare professionals.`,
                img : IMAGES.project_desc_4,
            },
        ],
    },
];





export { publications, projects };