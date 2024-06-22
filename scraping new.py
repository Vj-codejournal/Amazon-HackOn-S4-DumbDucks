# Import necessary modules
import requests
from bs4 import BeautifulSoup

# Define headers
HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept-Language': 'en-US, en;q=0.5'
}

# Define the function to get data from URL
def getdata(url):
    r = requests.get(url, headers=HEADERS)
    return r.text

# Define the function to parse HTML code
def html_code(url):
    htmldata = getdata(url)
    soup = BeautifulSoup(htmldata, 'html.parser')
    return soup

# Define the URL
url = "https://www.amazon.in/Motorola-Ocean-Green-128GB-Storage/dp/B0CSK41VQJ/?_encoding=UTF8&pd_rd_w=PhGBK&content-id=amzn1.sym.721fe359-5b18-49d2-bb73-de80fe9d4a7b%3Aamzn1.symc.acc592a4-4352-4855-9385-357337847763&pf_rd_p=721fe359-5b18-49d2-bb73-de80fe9d4a7b&pf_rd_r=XB4ZFDVAEVV59VZHVMEZ&pd_rd_wg=MyOIr&pd_rd_r=fa59b407-5288-4763-80d5-674063200bc2&ref_=pd_hp_d_btf_ci_mcx_mr_hp_d#customerReviews"
soup = html_code(url)

# Print the entire HTML content to debug
# print("HTML content of the page:")
# print(soup.prettify())

# Define the function to get customer names
def cus_data(soup):
    data_str = ""
    cus_list = []
    for item in soup.find_all("p", class_="a-profile-name"):
        data_str = item.get_text()
        cus_list.append(data_str)
    return cus_list

# Define the function to get customer reviews
def cusi_data(soup):
    data_str = ""
    cus_list = []
    for item in soup.find_all("div", class_="a-expander-content reviewText review-text-content a-expander-partial-collapse-content"):
        data_str = item.get_text()
        cus_list.append(data_str)
    return cus_list

# Get customer names and reviews
cus_res = cus_data(soup)
cus_r = cusi_data(soup)

# Debug prints to check if we are getting the correct elements
print("Customer Names:", cus_res)
print("Customer Reviews:", cus_r)

# Combine customer names and reviews into a dictionary
customer = dict(zip(cus_res, cus_r))
print("Customer Dictionary:", customer)

# Print the reviews
print("\nCustomer Reviews:")
for name, review in customer.items():
    print(f"Name: {name}")
    print(f"Review: {review}")
    print("-" * 40)
