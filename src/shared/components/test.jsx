import React from 'react'

export default function Test() {
    return (
        <div>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label for="first_name" className="block mb-2 text-sm font-medium ">First name</label>
                    <select
                        id='area'
                        onChange={(event) => doApiAreaList(event.target.value)}
                        className='bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5'

                    >
                        <option defaultValue='select area'>select area</option>
                        {arArea.map((item) => (
                            <option key={item.strArea} value={item.strArea}>
                                {item.strArea}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label for="last_name" className="block mb-2 text-sm font-medium ">Last name</label>
                    <select
                        id='categories'
                        onChange={(event) => doApiCatList(event.target.value)}
                        className='bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5'
                    >
                        <option defaultValue='select categories'>select categories</option>
                        {arCat.map((item) => (
                            <option key={item.idCategory} value={item.strCategory}>
                                {item.strCategory}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="mb-6">
                <label for="email" className="block mb-2 text-sm font-medium ">Email address</label>
                <form onSubmit={handleSubmit(onSubForm)}>
                    <input
                        placeholder='Search a recipe'
                        {...register('Search', { required: false })}
                        className='w-auto p-2 border border-gray-300 rounded'
                        type='text'
                        id='title'
                    />
                    <button className='bg-t-white border border-gray-300 text-sm rounded-lg block w-full p-2.5 '>
                        search
                    </button>
                </form>
            </div>
        </div>
    )
}
