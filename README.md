# **Predicting Potentially Hazardous Celestial Bodies**

This Kaggle notebook uses a traditional machine learning approach to predict whether a celestial body is potentially hazardous to Earth based on its orbital parameters and other features.

## **Project Description**

Asteroids and comets regularly pass near Earth's orbit, and while most are harmless, a small fraction could pose a significant risk. This notebook utilizes a dataset from NASA's ALL Records for Near-Earth Objects to build a machine learning model that classifies celestial bodies as "hazardous" or "non-hazardous."

The goal of this project is to:

- Explore and preprocess the dataset.
- Train and evaluate several machine learning models.
- Identify the most important features for predicting a potentially hazardous celestial body.

## **Dataset**

- **Source:** The dataset is publicly available on kaggle [NASA | Nearest Earth Objects (1910-2024)](https://www.kaggle.com/datasets/ivansher/nasa-nearest-earth-objects-1910-2024/data).
- **Features:**
    - **Neo id:** Unique Identifier for each Asteroid
    - Name:** Name given by NASA
    - **Absolute magnitude:** Describes intrinsic luminosity
    - **Estimated Minimum Distance:** Minimum Estimated Diameter in Kilometres
    - **Estimated Maximum Distance:** Maximum Estimated Diameter in Kilometres
    - **Orbiting Body:** The celestial body that this object orbits (Earth).
    - Miss Distance:** The closest the object comes to Earth's orbit.
    - **Relative Velocity (kmph):** The velocity of the object relative to Earth.
    - **Is Hazardous (Target):** A binary label indicating if the object is hazardous (1) or not (0).

## **Installation**

To run this notebook, you need a Python environment with the following libraries installed:

- `pandas`
- `numpy`
- `scikit-learn`
- `matplotlib`
- `seaborn`

You can install the dependencies using:

`pip install pandas numpy scikit-learn matplotlib seaborn`

## **Usage**

1. **Load the Notebook:**
    - Open the notebook in Kaggle or your local Jupyter environment.
2. **Data Preprocessing:**
    - The notebook includes code to handle missing values, duplicates, outliers, scale features, and encode categorical variables.
3. **Insightful Visualizations:** The notebook include some business questions with visuals to Aid in understanding them
4. **Feature Engineering:** 
	- created new feature merging between estimated min and max distance
	- used Mutual Information (MI) to capture any type of relationship between features and target
5. **Model Training:**
    - The following models are trained and evaluated:
        - Logistic Regression (logreg)
        - Random Forest Classifier (RF)

6. **Evaluation:**
    - Performance metrics such as accuracy, precision, recall, and ROC-AUC score are used to evaluate the models.
    - Feature importance is analyzed to identify the key factors contributing to the predictions.

## **Results**

- **Best Performing Model:** Random Forest Classifier with an accuracy of **99%** and an ROC-AUC score of **1**.
	- To ensure that RF isn't  overfitting the data, i calculated train and test loss and the difference between them was 0.0292, so there is no overfitting

## **Conclusion**

The notebook demonstrates that traditional machine learning models can effectively predict whether a celestial body is potentially hazardous to Earth. The Random Forest Classifier outperformed other models in accuracy and provides a good balance between interpretability and performance.

## **Next Steps**

- Experiment with other advanced models, such as Gradient Boosting or Neural Networks.
- Improve feature engineering further more to enhance the model's accuracy.

## **Contact Information**

If you have any questions or suggestions to improve, please contact me via Kaggle or at ahmedelsayedtaha467@gmail.com.
