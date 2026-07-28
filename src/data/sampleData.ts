import { ReportFormData, SubjectInfo, AnalyticsData } from '../types';

export const sampleReportData: ReportFormData = {
  projectTitle: 'AI-Powered Smart Traffic Optimization & Emergency Corridor Routing System',
  studentName: 'Alex V. Harrison',
  registerNumber: '312221104089',
  guideName: 'Dr. Sarah M. Jenkins, Ph.D.',
  department: 'Department of Computer Science & Engineering',
  college: 'National Institute of Engineering & Technology',
  subject: 'Data Structures & Artificial Intelligence',
  technologies: 'C++20, Python 3.11, OpenCV 4.8, PyTorch, Node.js, WebSockets, Graphviz, Chart.js, Tailwind CSS',
  projectDescription: 'An intelligent urban traffic control system that uses computer vision queue detection and dynamic graph algorithms to dynamically adapt traffic signal timers and clear real-time green corridors for emergency medical vehicles.',
  abstract:
    'Traffic congestion in metropolitan centers causes substantial delays, increased fuel consumption, and severe response latencies for emergency medical vehicles. This project presents an intelligent traffic management framework utilizing dynamic graph data structures and real-time computer vision queue estimation. By representing city intersections as weighted directed graph nodes and dynamically adjusting traffic signal phase durations based on queue density, the system optimizes vehicle throughput by up to 38%. Furthermore, an automated emergency corridor routing module leverages Dijkstra’s shortest path algorithm with dynamic edge weights to clear green corridors for ambulances in real time.',
  problemStatement:
    'Metropolitan intersections governed by static fixed-timer signals fail to respond to dynamic fluctuations in traffic volume, leading to artificial gridlocks, elevated carbon emissions, and hazardous delays for emergency response units. Existing traffic infrastructure lacks real-time sensor intelligence and automated priority override protocols.',
  objectives:
    '1. Design and implement a dynamic weighted graph structure representing road networks and live traffic bottlenecks.\n2. Integrate real-time queue length detection using background image processing and deep learning object counters.\n3. Develop a priority queue-based emergency vehicle signal override system for zero-delay green light corridors.\n4. Conduct benchmarking against fixed-timer traffic controllers under peak and off-peak urban congestion conditions.\n5. Reduce average intersection waiting latency by at least 30% and emergency transit time by 45%.',
  methodology:
    'The system architecture follows a 4-tier modular pipeline:\n\n1. Sensing & Data Acquisition: High-definition cameras at intersection approaches stream video frames to an edge processing gateway running YOLOv8 object detection to count vehicle density per lane.\n2. Graph Representation & Queue Modeling: Intersections are stored as node structures, while road links are weighted edges. Edge weights dynamically update as W = (Base_Distance / Max_Speed) + (Queue_Length * Penalty_Factor).\n3. Adaptive Signal Scheduling Engine: A custom max-priority queue schedules green phases proportionally to lane weight ratios while enforcing minimum pedestrian crossing thresholds.\n4. Emergency Preemption Protocol: When an emergency vehicle transmits GPS telemetry, a modified A* pathfinding algorithm recalculates the optimal route and signals connected traffic lights to clear preceding blocks via WebSocket telemetry.',
  systemDesign:
    'The system is organized into three decoupled layers: Data Acquisition Layer (Edge Cameras & OpenCV Frame Processor), Core Intelligence Layer (Graph Engine, YOLOv8 Vehicle Counter, and Priority Queue Scheduler), and Presentation Layer (Real-time WebSocket Command Dashboard & Telemetry Logs). Communication between edge nodes and central command occurs over TLS-encrypted WebSocket streams.',
  modules:
    '• Traffic Camera Feed Processor & Vehicle Counter Module\n• Dynamic Graph Data Structure & Routing Engine\n• Adaptive Phase Timing & Priority Queue Scheduler\n• Emergency Vehicle Telemetry & Green Corridor Overrider\n• Central Command Web Dashboard & Real-Time Analytics UI',
  results:
    'Experimental validation conducted on a simulated 16-intersection grid demonstrated:\n• 34.2% reduction in average vehicle idling time during peak morning hours.\n• 48.6% faster transit times for simulated emergency response vehicles.\n• 22.8% decrease in carbon emissions due to reduced stop-and-go acceleration cycles.\n• Stable real-time edge processing latency below 14ms per frame at 1080p resolution.',
  conclusion:
    'The AI-Powered Smart Traffic Optimization System successfully bridges advanced graph algorithms and deep learning computer vision to resolve modern urban congestion challenges. Benchmarking results conclusively validate that dynamic edge weighting and priority queues outperform legacy fixed-timer schedules across all traffic density metrics. The implementation demonstrates high reliability, minimal latency, and immediate real-world utility for smart city infrastructure.',
  futureScope:
    '• Integration with V2X (Vehicle-to-Everything) communication standards for autonomous vehicle syncing.\n• Predictive traffic flow forecasting using Long Short-Term Memory (LSTM) neural networks.\n• Mobile driver application for dynamic rerouting recommendations.\n• Solar-powered standalone micro-controller deployment for rural highway junctions.',
  references:
    '1. Cormen, T. H., Leiserson, C. E., Rivest, R. L., & Stein, C. (2022). Introduction to Algorithms (4th ed.). MIT Press.\n2. Redmon, J., & Farhadi, A. (2018). YOLOv3: An Incremental Improvement. arXiv preprint arXiv:1804.02767.\n3. Dijkstra, E. W. (1959). A note on two problems in connexion with graphs. Numerische Mathematik, 1(1), 269-271.\n4. IEEE Intelligent Transportation Systems Society Guidelines on Urban Signal Automation (2025).',
  acknowledgement:
    'I express my profound gratitude to my project guide, Dr. Sarah M. Jenkins, for her invaluable guidance and mentorship throughout this research. I also extend my heartfelt thanks to the Department of Computer Science & Engineering and the Management of National Institute of Engineering & Technology for providing state-of-the-art computational infrastructure.',
  certificateDetails: {
    academicYear: '2025 - 2026',
    hodName: 'Dr. Robert E. Chen, Ph.D.',
    principalName: 'Dr. Eleanor Vance, D.Sc.',
  },
};

export const subjectsData: SubjectInfo[] = [
  {
    id: 'dsa',
    title: 'Data Structures & Algorithms',
    category: 'Computer Science Core',
    description:
      'The foundational blueprint of computer science that governs data organization, storage, retrieval, and computational efficiency in modern software architecture.',
    iconName: 'Network',
    topics: [
      {
        name: 'Arrays',
        description: 'Contiguous memory allocation storing homogeneous elements with O(1) index access.',
        usefulness: 'Crucial for spatial locality cache optimization, image pixel manipulation, buffer storage, and low-level matrix computations.',
        codeExample: 'int arr[5] = {10, 20, 30, 40, 50};\nint val = arr[2]; // Fast O(1) direct offset access',
      },
      {
        name: 'Linked Lists',
        description: 'Linear collections of nodes containing data and pointer references to subsequent nodes.',
        usefulness: 'Essential for dynamic memory allocation, building undo/redo stacks, music playlists, and hash table collision resolution via chaining.',
        codeExample: 'struct Node {\n  int data;\n  struct Node* next;\n};',
      },
      {
        name: 'Stacks',
        description: 'LIFO (Last-In-First-Out) linear structure supporting push, pop, and peek operations.',
        usefulness: 'Powers function call stacks, execution backtracing, recursion management, syntax parsing, and browser history navigation.',
        codeExample: 'stack.push(item);\nint top = stack.pop(); // LIFO retrieval',
      },
      {
        name: 'Queues',
        description: 'FIFO (First-In-First-Out) structure ensuring ordered processing of tasks.',
        usefulness: 'Vital for CPU task scheduling, print job queues, web server request buffers, and asynchronous message queues (Kafka, RabbitMQ).',
        codeExample: 'queue.enqueue(task);\nTask current = queue.dequeue(); // FIFO dispatch',
      },
      {
        name: 'Trees & Graphs',
        description: 'Hierarchical and interconnected node networks representing non-linear relational domain data.',
        usefulness: 'Forms the backbone of file systems (DOM/Directory trees), database indexing (B+ Trees), GPS mapping (Dijkstra), and social network graphs.',
        codeExample: 'struct TreeNode {\n  int key;\n  TreeNode *left, *right;\n};',
      },
      {
        name: 'Searching & Sorting',
        description: 'Algorithms like Binary Search, QuickSort, and MergeSort designed to order and retrieve data efficiently.',
        usefulness: 'Optimizes search engine indexing, e-commerce catalog filtering, autocomplete suggestions, and database query optimization.',
        codeExample: 'int mid = low + (high - low) / 2;\nif (arr[mid] == target) return mid; // O(log N) Binary Search',
      },
    ],
    realWorldApplications: [
      'Database Query Indexing (B-Trees)',
      'Autonomous GPS Route Planning (A* Algorithm)',
      'Memory Management & Garbage Collection',
      'Real-Time Audio & Video Signal Processing',
      'High-Frequency Trading Order Books',
    ],
    softwareDevUsefulness:
      'Mastery of Data Structures enables software engineers to write memory-efficient, lightning-fast code capable of scaling gracefully from single-user apps to billion-request cloud microservices.',
  },
  {
    id: 'c-lang',
    title: 'C Programming Language',
    category: 'System Programming',
    description:
      'The mother of modern programming languages. C offers hardware-level control, direct memory management, and unbeatable execution velocity.',
    iconName: 'Cpu',
    topics: [
      {
        name: 'Variables & Data Types',
        description: 'Named memory locations mapped to scalar types like int, float, char, and double.',
        usefulness: 'Forms the memory footprint baseline for memory-constrained embedded systems and microcontrollers.',
        codeExample: 'unsigned int sensorVal = 1024;\nfloat temperature = 36.6f;',
      },
      {
        name: 'Functions & Scope',
        description: 'Modular code blocks providing functional abstraction, parameter passing, and reusability.',
        usefulness: 'Reduces code duplication, isolates side effects, and enables stack-frame reentrancy in concurrent kernels.',
        codeExample: 'int calculateChecksum(const uint8_t* buffer, size_t len) {\n  // Implementation\n}',
      },
      {
        name: 'Control Loops & Conditionals',
        description: 'Iterative structures (for, while, do-while) and branch controls (if-else, switch).',
        usefulness: 'Drives continuous sensor polling loops, state machine transitions, and packet frame processing.',
        codeExample: 'while (sensor_active) {\n  read_telemetry();\n  delay_ms(100);\n}',
      },
      {
        name: 'Arrays & Strings',
        description: 'Contiguous arrays and null-terminated character sequences.',
        usefulness: 'Provides raw byte buffers for socket networking, serial communication (UART/SPI), and file streaming.',
        codeExample: 'char commandBuf[256];\nsnprintf(commandBuf, sizeof(commandBuf), "AT+SEND=%d", packetId);',
      },
      {
        name: 'Pointers & Memory Addresses',
        description: 'Variables storing memory addresses enabling direct RAM access and pass-by-reference semantics.',
        usefulness: 'Powers dynamic heap management (malloc/free), hardware registers, zero-copy buffer passing, and performance critical code.',
        codeExample: 'int x = 42;\nint* ptr = &x;\n*ptr = 100; // Direct memory mutation',
      },
      {
        name: 'Structures & Unions',
        description: 'User-defined compound data types combining heterogeneous fields.',
        usefulness: 'Maps directly to hardware device register maps, binary packet formats, and file header specifications.',
        codeExample: 'typedef struct {\n  uint32_t header;\n  uint16_t payloadLen;\n  uint8_t flags;\n} PacketHeader;',
      },
      {
        name: 'File Handling & I/O',
        description: 'Low-level file operations including fopen, fread, fwrite, and fclose.',
        usefulness: 'Essential for persistent logging, operating system config reading, database storage engines, and binary serialization.',
        codeExample: 'FILE* fp = fopen("data.bin", "rb");\nfread(&buffer, sizeof(uint8_t), 1024, fp);\nfclose(fp);',
      },
    ],
    realWorldApplications: [
      'Linux & Windows Operating System Kernels',
      'Embedded Automotive & Aerospace Avionics',
      'Database Storage Engines (SQLite, PostgreSQL core)',
      'Game Engines & Real-time Renderers (OpenGL/Vulkan drivers)',
      'Internet of Things (IoT) Firmware',
    ],
    softwareDevUsefulness:
      'Understanding C provides developers with deep architectural insights into how operating systems execute code, manage heap memory, interact with hardware registers, and handle system calls.',
  },
  {
    id: 'english',
    title: 'Technical English & Professional Communication',
    category: 'Academic & Career Excellence',
    description:
      'The primary bridge connecting technical innovation to business execution, academic peer review, and global multidisciplinary team collaboration.',
    iconName: 'BookOpen',
    topics: [
      {
        name: 'Technical Documentation',
        description: 'Structured writing for API specifications, architecture design docs, and user manuals.',
        usefulness: 'Enables developer onboarding, reduces integration bugs, and ensures long-term software maintainability.',
        codeExample: '# API Endpoint Specification\n`POST /v1/reports/generate`\nReturns JSON report payload.',
      },
      {
        name: 'Professional Communication',
        description: 'Verbal, written, and digital etiquette tailored for stakeholders, clients, and engineering leads.',
        usefulness: 'Facilitates effective code reviews, sprint planning, client negotiations, and cross-functional harmony.',
        codeExample: 'Dear Project Guide,\nAttached is the revised methodology section addressing peer-review comments.',
      },
      {
        name: 'Grammar & Mechanics',
        description: 'Active voice, parallel structure, subject-verb agreement, and precise domain vocabulary.',
        usefulness: 'Eliminates ambiguity in safety-critical engineering requirements and elevates academic publication acceptance.',
        codeExample: 'Incorrect: "The system was tested by us and fast." \nCorrect: "We evaluated the system and verified sub-10ms response latency."',
      },
      {
        name: 'Professional Writing & Proposals',
        description: 'Writing technical grant proposals, executive summaries, and business feasibility reports.',
        usefulness: 'Secures venture capital funding, university research grants, and executive project approvals.',
        codeExample: 'Executive Summary: This proposal outlines a $50k upgrade to regional smart grid metering.',
      },
      {
        name: 'Report Writing & IEEE Formatting',
        description: 'Standardizing academic layout, citations, figures, tables, and formal mathematical notation.',
        usefulness: 'Ensures compliance with IEEE, ACM, and University dissertation formatting guidelines.',
        codeExample: 'Figure 1: System Block Diagram. All dimensions in millimeters (mm).',
      },
    ],
    realWorldApplications: [
      'Publishing IEEE & ACM Research Papers',
      'Drafting Software Architecture Design Documents (ADD)',
      'Filing Patents & Intellectual Property Documentation',
      'Writing Clear API Documentation & Open-Source Readmes',
      'Leading Engineering Standups & Investor Pitch Presentations',
    ],
    softwareDevUsefulness:
      'Clear technical writing separates average coders from engineering leaders who can articulate complex systems, mentor teams, influence product roadmaps, and publish impactful research.',
  },
];

export const initialAnalyticsData: AnalyticsData = {
  totalGenerated: 14250,
  totalDownloads: 38920,
  topSubject: 'Data Structures & Algorithms',
  avgAiScore: 98.4,
  subjectDistribution: [
    { subject: 'Data Structures', count: 5420 },
    { subject: 'C Language', count: 3890 },
    { subject: 'English & Docs', count: 2150 },
    { subject: 'Artificial Intelligence', count: 1840 },
    { subject: 'Web Technologies', count: 950 },
  ],
  downloadFormats: [
    { name: 'PDF Format', value: 62 },
    { name: 'DOCX Format', value: 28 },
    { name: 'Markdown / Text', value: 10 },
  ],
  monthlyTrends: [
    { month: 'Jan', reports: 1200, downloads: 3100 },
    { month: 'Feb', reports: 1450, downloads: 3800 },
    { month: 'Mar', reports: 1900, downloads: 4900 },
    { month: 'Apr', reports: 2400, downloads: 6200 },
    { month: 'May', reports: 2100, downloads: 5800 },
    { month: 'Jun', reports: 2800, downloads: 7400 },
    { month: 'Jul', reports: 3400, downloads: 8900 },
  ],
};
