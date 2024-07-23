# 零、Python 包使用

## 1、Numpy

### (1) `tile()`方法

功能：沿各个方向复制数组。
语法：`numpy.tile(A, reps)`

- `A`：待复制数组
- `reps`：重复次数元组

使用案例：

```python
import numpy as np

a = np.array([[1, 2], [3, 4]])
# 行重复两次，列重复三次
b = np.tile(a, (2, 3))

print(b)
```

输出：

```python
array([[1, 2, 1, 2, 1, 2],
       [3, 4, 3, 4, 3, 4],
       [1, 2, 1, 2, 1, 2],
       [3, 4, 3, 4, 3, 4]])
```

### (2) `sum()`方法

功能：计算元素总和
使用案例：

```python
import numpy as np

# 创建一个 2x2 的数组
arr = np.array([[1, 2], [3, 4]])

# 计算数组中所有元素的总和
sum_all = np.sum(arr)

# 沿第一维（行）计算总和
# 沿行压缩
sum_axis0 = np.sum(arr, axis=0)

# 沿第二维（列）计算总和
# 沿列压缩
sum_axis1 = np.sum(arr, axis=1)

print(sum_all)    # 输出：10
print(sum_axis0)  # 输出：[4 6]
print(sum_axis1)  # 输出：[3 7]
```

### (3) `argsort()`方法

功能：排序数组，生成一个索引数组，返回的索引是将原始数组的元素按升序排序后的索引。
使用案例：

```python
import numpy as np

# 创建一个包含 4 个整数的数组
arr = np.array([7, 3, 5, 1])

# 对数组进行排序并获取每个元素的索引
sorted_indices = arr.argsort()

print(sorted_indices)  # 输出：[3 1 2 0]
```

### (4) `min()`方法

功能：沿某一轴找到数组的最值。
使用案例：

```python
# 二维数组
y = np.array([[1, 2, 3], [4, 5, 6]])
min_val = np.min(y)
print(min_val) # 输出1，因为1是y中的最小值

# 沿着行的最小值
min_val = np.min(y, axis=1)
print(min_val) # 输出[1, 4]，因为第一行的最小值是1，第二行的最小值是4

# 沿着列的最小值
min_val = np.min(y, axis=0)
print(min_val) # 输出[1, 2, 3]，因为第一列的最小值是1，第二列的最小值是2，第三列的最小值是3
```

### (5) `nonzero()`方法

功能：返回一个数组中非零元素的索引。
使用案例：

```python
nonzero_arr = np.nonzero(arr)
```

## 2、sklearn

### (1) `train_test_split()`

功能：将数据集划分为测试集和训练集。
使用语法：`train_test_split(*arrays, test_size=None, train_size=None, random_state=None, shuffle=True, stratify=None)`

- ***arrays**：待划分的数据集。可以是numpy数组，Python列表或稀疏矩阵。如果有两个或多个数组传入，则它们必须具有相同的长度，用于指定相应的数据和标签。
- **test_size**：测试集的比例。默认值为0.25，即将数据集划分为75%的训练集和25%的测试集。可以使用一个浮点数或整数指定测试集的大小。如果指定为浮点数，则表示测试集的比例；如果指定为整数，则表示测试集的绝对大小。
- **train_size**：训练集的比例。默认值为**None**，即训练集的大小为数据集的补集（即1 - test_size）。可以使用一个浮点数或整数指定训练集的大小。如果指定为浮点数，则表示训练集的比例；如果指定为整数，则表示训练集的绝对大小。如果**test_size**和**train_size**都不为**None**，则将忽略**test_size**。
- **random_state**：随机数生成器的种子，用于控制随机数的生成。默认情况下，随机数生成器使用当前系统时间作为种子。如果想要再现相同的结果，可以指定一个整数种子值。
- **shuffle**：是否在划分前对数据集进行洗牌。默认值为True。如果设置为False，则不进行洗牌，划分结果将是按照原始顺序划分的。
- **stratify**：可选参数，指定类别标签（如果有的话）用于分层采样。默认情况下，不进行分层采样。

使用案例：

```python
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_iris


iris = load_iris()
X = iris.data
y = iris.target
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
```

### (2) `accuracy_score()`

功能：计算分类器准确度。
使用语法：`accuracy_score(y_true, y_pred, normalize=True, sample_weight=None)`

- **y_true**：真实标签，通常是测试集的标签。
- **y_pred**：分类器预测的标签。
- **normalize**：一个布尔值，用于指定是否将结果归一化到0到1之间。默认为True，表示将结果归一化；如果设置为False，则返回正确分类的样本数。
- **sample_weight**：一个可选的数组，用于指定每个样本的权重。默认为None，表示所有样本的权重都为1。

使用案例：

```python
accuracy = accuracy_score(y_test, y_pred)
```

### (3) `fit_transform()`

`fit_transform()`方法是 sklearn 中用于对数据进行预处理的方法之一。它是`fit()`和`transform()`方法的组合，因此可以一次性完成这两个步骤。
`fit()`方法用于计算训练数据的均值和标准差等参数，以便用于后续数据的标准化（scaling）或归一化（normalization）操作。同时，`fit()`方法还会对训练数据进行一些必要的数据清理和处理，以确保训练数据的质量。
`transform()`方法用于将原始数据转换为标准化或归一化后的数据。这个方法通常需要在`fit()`方法之后调用，以确保使用相同的均值和标准差进行转换。
`fit_transform()`方法可以将`fit()`和`transform()`两个步骤结合起来，方便用户一次性完成预处理操作，而不必多次调用`fit()`和`transform()`方法。同时，它也能够在保证训练数据质量的前提下，对数据进行标准化或归一化处理，提高后续机器学习算法的准确性。
使用案例1：使用 `fit_transform()`将文本数据转换为多行特征向量

```python
# 创建文本数据
corpus = ['This is the first document.',
          'This is the second second document.',
          'And the third one.',
          'Is this the first document?']

# 将文本数据转化为数值特征
vectorizer = CountVectorizer()
X = vectorizer.fit_transform(corpus)
```

> 上述代码执行完毕，X 是一个稀疏矩阵，每一行是每篇文档的向量表示，每一列是单词的计数。

### (4) 各种数据集介绍

#### 1. 乳腺癌数据集

乳腺癌数据集（Breast Cancer Dataset）是机器学习中常用的数据集之一，其包含了从乳腺组织细胞图像中提取出的 30 个特征，以及相应的良性（Benign）或恶性（Malignant）标签。该数据集共有 569 个样本，其中 357 个是良性乳腺肿瘤，212 个是恶性乳腺肿瘤。
该数据集的主要目的是通过对乳腺肿瘤的特征分析，以帮助医生进行早期乳腺癌的诊断和分类。因此，它经常被用来研究机器学习算法在二分类任务中的表现。同时，该数据集也是一个典型的高维数据集，因此也常用来研究降维和特征选择算法。
该数据集可以通过sklearn库中的`**load_breast_cancer()**`函数进行加载。

#### 2. 糖尿病数据集

糖尿病数据集（Diabetes dataset）是一个用于回归分析的数据集，由美国国家糖尿病和消化和肾脏疾病研究所（National Institute of Diabetes and Digestive and Kidney Diseases）提供。该数据集包括 442 个病人的 10 个生理特征，以及病人随后一年内糖尿病进展的定量测量值。这些生理特征包括：

1. 年龄（Age）
2. 性别（Sex）
3. 体质指数（Body mass index）
4. 血压（Average blood pressure）
5. 6个血清指标（6 blood serum measurements）

数据集的目标变量为每个病人在随访期间1年内疾病进展的测量值，该测量值是一个连续变量，表示疾病进展的定量度量。数据集用于糖尿病的回归预测建模问题。
在 scikit-learn 库中，糖尿病数据集可以使用`load_diabetes()`函数加载。该函数返回一个字典对象，包含数据、目标变量、特征名称等信息，可以用于训练和评估回归模型。

## 3、内置函数

### (1) `randrange()`

`randrange()` 函数是 Python 中的一个内置函数，用于生成一个指定范围内的随机整数。它可以接受一个或两个参数，具体使用方法如下：

1. 当只有一个参数时，`randrange(stop)` 会返回一个在 0 到 stop-1 之间（包括0和stop-1）的随机整数。例如：

```python
import random

x = random.randrange(10)
print(x)  # 可能输出 0 到 9 中的任意一个整数
```

2. 当有两个参数时，`randrange(start, stop)` 会返回一个在 start 到 stop-1 之间（包括start和stop-1）的随机整数。例如：

```python
import random

x = random.randrange(1, 7)
print(x)  # 可能输出 1 到 6 中的任意一个整数
```

注意：`randrange()` 函数不包括 stop 参数本身，因此如果要生成一个在 0 到 stop 之间（包括0和stop）的随机整数，可以使用 `randrange(stop+1)`。

### (2) `map()`

`map()`是 Python 内置函数之一，它的作用是**将一个函数应用到一个可迭代对象的所有元素上**，然后返回一个新的可迭代对象，其中每个元素都是原始可迭代对象对应元素经过该函数处理后的结果。
`map()`函数的基本语法如下：

```python
map(function, iterable, ...)
```

其中，`function`是接受一个参数的函数，它会被应用到`iterable`中的每个元素上，而`iterable`则是一个可迭代对象，可以是列表、元组、集合、字典等等。如果有多个`iterable`参数，那么 **function** 也必须能够接受相应数量的参数，然后将每个可迭代对象的相同位置的元素传递给函数。
下面是一个例子，展示了如何使用`map()`函数将一个列表中的所有元素转换为它们的平方：

```python
numbers = [1, 2, 3, 4, 5]
squares = map(lambda x: x**2, numbers)
print(list(squares)) # 输出 [1, 4, 9, 16, 25]
```
