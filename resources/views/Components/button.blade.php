<a {{$attributes-> merge(["class"=>
               "relative inline-flex items-center px-3 py-2 text-sm font-medium
               text-gray-700 bg-white border border-gray-200 rounded-full leading-5
               hover:bg-gray-50 hover:text-gray-600
               focus:z-10 focus:outline-none focus:ring ring-gray-200 focus:border-blue-300
               active:bg-gray-100 active:text-gray-600 transition ease-in-out duration-150
               dark:bg-gray-100 dark:border-gray-200 dark:text-gray-800
               dark:hover:bg-white dark:hover:text-gray-900"
            ])}}>{{$slot}}
</a>
