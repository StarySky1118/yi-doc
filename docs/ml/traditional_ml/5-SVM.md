# 五、支持向量机

介绍：[https://zhuanlan.zhihu.com/p/49331510](https://zhuanlan.zhihu.com/p/49331510)

## 1、代码实战

### (1) sklearn SVM 示例代码

```python
from sklearn import datasets
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score
# 加载Iris数据集
iris = datasets.load_iris()

# 获取特征和标签
X = iris.data
y = iris.target

# 将数据集分为训练集和测试集
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# 训练SVM分类器
clf = SVC(kernel='linear')
clf.fit(X_train, y_train)

# 预测测试集
y_pred = clf.predict(X_test)

# 计算准确度
acc = accuracy_score(y_test, y_pred)
print("准确度： {:.2f}%".format(acc*100))
```

### (2) 手写字体识别：1和9

核函数使用径向基函数。

```python
from numpy import *
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score


def img2vector(filename):
    returnVect = zeros((1, 1024))
    fr = open(filename)
    for i in range(32):
        lineStr = fr.readline()
        for j in range(32):
            returnVect[0, 32 * i + j] = int(lineStr[j])
    return returnVect


def loadImages(dirName):
    from os import listdir
    hwLabels = []
    print(dirName)
    trainingFileList = listdir(dirName)  # load the training set
    m = len(trainingFileList)
    trainingMat = zeros((m, 1024))
    for i in range(m):
        fileNameStr = trainingFileList[i]
        fileStr = fileNameStr.split('.')[0]  # take off .txt
        classNumStr = int(fileStr.split('_')[0])
        if classNumStr == 9:
            hwLabels.append(-1)
        else:
            hwLabels.append(1)
        trainingMat[i, :] = img2vector('%s/%s' % (dirName, fileNameStr))
    return trainingMat, hwLabels


if __name__ == "__main__":
    # 加载数据集
    X_train, y_train = loadImages('./data/trainingDigits')
    X_test, y_test = loadImages('./data/testDigits')

    # 训练SVM分类器
    clf = SVC(kernel='rbf')
    clf.fit(X_train, y_train)

    # 预测测试集
    y_pred = clf.predict(X_test)

    # 计算准确度
    acc = accuracy_score(y_test, y_pred)
    print("准确度： {:.2f}%".format(acc*100))
```
