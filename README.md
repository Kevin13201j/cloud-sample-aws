# ☁️ Cloud Sample AWS Project

## 📘 Overview

This project is part of the **Cloud Computing** practical exercises using **Docker**, **Docker Hub**, and **AWS Elastic Beanstalk** through the **AWS Academy Learner Lab** environment.

The goal of this project is to **build, containerize, publish, and deploy** a simple web application to the cloud, step by step, documenting each phase of the process.

---

## 🧩 Project Phases

### 🏗️ 1. Project Setup

A new folder was created for the project:

```bash
cloud-sample-aws/
````

Inside this folder, the following key files were added:

* `Dockerfile` → defines how to build the Docker image.
* `Dockerrun.aws.json` → specifies how AWS Elastic Beanstalk should run the container.
* `package.json` and `src/` → contain the application code (if applicable).

**Example structure:**

```
cloud-sample-aws/
│
├── Dockerfile
├── Dockerrun.aws.json
├── package.json
└── src/
```

---

### 🐳 2. Building the Docker Image

We used Docker CLI to build and test the container locally.

1. **Build the image:**

   ```bash
   docker build -t cloud-sample-aws .
   ```

2. **Verify the image:**

   ```bash
   docker images
   ```

3. **Run the container locally:**

   ```bash
   docker run -d -p 8080:8080 cloud-sample-aws
   ```

4. **Check running containers:**

   ```bash
   docker ps -a
   ```

If the container is running successfully, the application should be accessible via:
👉 [http://localhost:3000](http://localhost:3000)

---

### 🐋 3. Publishing the Image to Docker Hub

1. **Log in to Docker Hub:**

   ```bash
   docker login
   ```

2. **Tag the image using your Docker Hub username:**

   ```bash
   docker tag cloud-sample-aws kjkevin/cloud-sample-aws:latest
   ```

3. **Push the image to Docker Hub:**

   ```bash
   docker push kjkevin/cloud-sample-aws:latest
   ```

4. Once uploaded, verify the image in your Docker Hub repository:
   🔗 [https://hub.docker.com/repositories](https://hub.docker.com/repositories)

---

### ☁️ 4. Deploying to AWS Elastic Beanstalk

We used the **AWS Academy Learner Lab** environment to deploy the containerized application.

#### Steps:

1. Log in to **AWS Academy** and launch the **Learner Lab** environment.
   (You should see the AWS Academy dashboard.)

2. Go to **AWS Elastic Beanstalk**:
   🔗 [https://console.aws.amazon.com/elasticbeanstalk](https://console.aws.amazon.com/elasticbeanstalk)

3. Click **“Create Application”**

4. Fill in the details:

   * **Application name:** `cloud-sample-aws`
   * **Platform:** Docker
   * **Upload your file:** Upload a `.zip` file containing only:

     ```
     Dockerrun.aws.json
     ```

     (The source code is not required; Elastic Beanstalk will pull the image from Docker Hub.)

5. Click **“Create environment”**

Elastic Beanstalk will automatically create and deploy the environment, provisioning EC2, S3, and other required AWS resources.

---

### 🧠 5. Expected Result

After deployment, you will receive a **public Elastic Beanstalk URL** (something like):

```
http://cloud-sample-aws.us-east-1.elasticbeanstalk.com/
```

Opening this URL should display your running application.

---

## 🧰 Tools Used

| Tool / Service              | Purpose                                      |
| --------------------------- | -------------------------------------------- |
| **Docker**                  | Containerization and local testing           |
| **Docker Hub**              | Cloud image repository                       |
| **AWS Academy Learner Lab** | AWS sandbox environment                      |
| **AWS Elastic Beanstalk**   | Deployment and orchestration service         |
| **Visual Studio Code**      | Development environment                      |
| **GitHub**                  | Version control and documentation repository |

---

## 🚀 How to Reproduce

1. Clone this repository:

   ```bash
   git clone https://github.com/kevinamagua/cloud-sample-aws.git
   cd cloud-sample-aws
   ```

2. Build the Docker image:

   ```bash
   docker build -t cloud-sample-aws .
   ```

3. Run the container:

   ```bash
   docker run -d -p 8080:8080 cloud-sample-aws
   ```

4. (Optional) Push to your Docker Hub:

   ```bash
   docker tag cloud-sample-aws <your-username>/cloud-sample-aws:latest
   docker push <your-username>/cloud-sample-aws:latest
   ```

5. Deploy to AWS Elastic Beanstalk using the provided `Dockerrun.aws.json`.

---

## 👨‍💻 Author

**Kevin Amaguaña**
Cloud Computing & Systems Development Student


